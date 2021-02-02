<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="product.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="code">Code</label>
        <input
          class="form-control"
          id="code"
          required
          v-model="product.code"
          name="code"
        />
      </div>

      <button @click="saveProduct" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newProduct">Add</button>
    </div>
  </div>
</template>

<script>
import ProductService from "../../services/product.service";

export default {
  name: "add-product",
  data() {
    return {
      product: {
        id: null,
        name: "",
        code: ""
      },
      submitted: false
    };
  },
  methods: {
    saveProduct() {
      var data = {
        name: this.product.name,
        code: this.product.code
      };

      ProductService.create(data)
        .then(response => {
          this.product.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newProduct() {
      this.submitted = false;
      this.product = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
