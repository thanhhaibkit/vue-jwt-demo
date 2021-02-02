<template>
  <div class="list row">
    <div class="col-md-6">
      <router-link to="/add-product" class="badge badge-success">
        New
      </router-link>
      <h4>Products List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(product, index) in products"
          :key="index"
          @click="setActiveProduct(product, index)"
        >
          {{ product.name }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentProduct">
        <h4>Product</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentProduct.name }}
        </div>
        <div>
          <label><strong>Code:</strong></label> {{ currentProduct.code }}
        </div>

        <a class="badge badge-warning"
          :href="'/products/' + currentProduct.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Product...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from "../../services/product.service";

export default {
  name: "products-list",
  data() {
    return {
      products: [],
      currentProduct: null,
      currentIndex: -1,
      code: ""
    };
  },
  methods: {
    retrieveProducts() {
      ProductService.getAll()
        .then(response => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveProducts();
      this.currentProduct = null;
      this.currentIndex = -1;
    },

    setActiveProduct(product, index) {
      this.currentProduct = product;
      this.currentIndex = index;
    },
    
    searchCode() {
      ProductService.findByCode(this.code)
        .then(response => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveProducts();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>