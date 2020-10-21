Vue.component('productListing', {
  props: ['products', 'colorFilter'],
  template: `
  <div class="list-container">
    <product-item
      v-for="product in filteredProducts"
      :key="product.imageSource"
      :is-new="product.isNew"
      :title="product.title"
      :image-source="product.imageSource"
      :image-description="product.imageDescription"
      :description="product.description"
      :price="product.price"
      :demo="product.demo"
    ></product-item>
  </div>
  `,
  computed: {
    filteredProducts: function () {
      return this.colorFilter === 'all'
        ? this.products
        : this.products.filter(({ color }) => color === this.colorFilter);
    },
  },
});
