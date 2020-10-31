const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const https = require('https');

async function scrollToBottom(page) {
  const distance = 100; // should be less than or equal to window.innerHeight
  const delay = 100;
  while (
    await page.evaluate(
      () =>
        document.scrollingElement.scrollTop + window.innerHeight <
        document.scrollingElement.scrollHeight
    )
  ) {
    await page.evaluate((y) => {
      document.scrollingElement.scrollBy(0, y);
    }, distance);
    await page.waitForTimeout(delay);
  }
}

const normalizeFilename = (item) =>
  `${(item.imageDescription + (item.description ? '_' + item.description : ''))
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ /g, '_')}.jpg`;

const download = (url, fileName) =>
  new Promise((resolve, reject) => {
    const destination = path.join(__dirname, 'images', fileName);
    const file = fs.createWriteStream(destination);

    https
      .get(url, (response) => {
        if (response.headers['content-type'] === 'image/jpeg') {
          response.pipe(file);

          file.on('finish', () => {
            file.close(resolve(true));
          });
        } else {
          console.error(response.headers['content-type']);
        }
      })
      .on('error', (error) => {
        fs.unlink(destination);

        reject(error.message);
      });
  });

const downloadResultImages = (result) => {
  result.forEach((item) => {
    console.log('Downloading:', item.imageDescription);
    download(item.imageSource, normalizeFilename(item));
  });
};

const getCatalogPageContent = async (catalogPageUrl) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(catalogPageUrl);
  await scrollToBottom(page);
  const result = await page.evaluate(() => {
    const listOfproducts = document.querySelector(
      '#main > div > div.grid-view > ul'
    ).children;
    console.log(listOfproducts);
    const listOfproductsArray = [];
    for (let index = 0; index < listOfproducts.length; index++) {
      listOfproductsArray.push(listOfproducts.item(index));
    }
    return listOfproductsArray
      .filter(
        // get only products
        (element) =>
          element.querySelector('div > a > div > div > img') !== null &&
          !!element.querySelector('div > a > div > div > img').alt
      )
      .map((element) => {
        const imageSource = element.querySelector('div > a > div > div > img')
          .src;
        const imageDescription = element.querySelector(
          'div > a > div > div > img'
        ).alt;
        let title;
        try {
          title = element.querySelector(
            'div > a > div.product-legend > span.title-with-level.product-title.font-century-std.size-s.bold > span'
          ).innerText;
        } catch {}
        let description;
        try {
          description = element.querySelector(
            'div > a > div.product-legend > p'
          ).innerText;
        } catch {}
        let price;
        try {
          price = element.querySelector(
            'div > a > div.product-legend > span.price-line'
          ).innerText;
        } catch {}
        let tag;
        try {
          tag = element.querySelector('div > a > div.product-legend > div > p')
            .innerText;
        } catch {}

        return {
          imageSource,
          imageDescription,
          title,
          description,
          price,
          demo: (!title && !description && !price) || undefined,
          isNew: (!!tag && tag.includes('Nouveauté')) || undefined,
          essential: (!!tag && tag.includes('DIORESSENTIALS')) || undefined,
        };
      });
  });
  const filterResult = result.filter(
    (product, index, listOfproducts) =>
      !listOfproducts
        .slice(index + 1)
        .map((nextProduct) => normalizeFilename(nextProduct))
        .includes(normalizeFilename(product))
  );
  console.log(filterResult);

  downloadResultImages(filterResult);
  fs.writeFileSync(
    path.join(__dirname, `${catalogPageUrl.split('/').pop()}.json`),
    JSON.stringify(
      filterResult.map((item) =>
        Object.assign(item, {
          imageSource: normalizeFilename(item),
        })
      )
    )
  );
  await browser.close();
};

getCatalogPageContent(
  'https://www.dior.com/fr_fr/mode-homme/pret-a-porter/polos-t-shirts'
);
