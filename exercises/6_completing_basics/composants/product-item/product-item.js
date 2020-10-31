Vue.component('productItem', {
  props: [
    'isNew',
    'title',
    'imageSource',
    'imageDescription',
    'description',
    'price',
    'demo',
  ],
  template: `
    <div class="product-container">
      <div class="product-image-container">
        <img
          class="product-image"
          :src="'http://localhost:3000/image/'+imageSource"
          :alt="imageDescription"
        />
        <div
          v-if="!demo"
          @click="toggleInWishlist"
          class="product-add-to-wishlist"
        >
          <img
            :src="inWishlist ? 'http://localhost:3000/image/heart_full.svg' : 'http://localhost:3000/image/heart_empty.svg'"
          />
        </div>
      </div>

      <div v-if="!demo" class="product-info">
        <p v-if="isNew" class="product-new-label">#Nouveauté</p>
        <p class="product-title">{{ title }}</p>
        <p class="product-description">{{ description }}</p>
        <p class="product-price">{{ price }}</p>
      </div>
    </div>
  `,
  data: () => ({ inWishlist: false }),
  methods: {
    toggleInWishlist: function () {
      this.inWishlist = !this.inWishlist;
    },
  },
});
