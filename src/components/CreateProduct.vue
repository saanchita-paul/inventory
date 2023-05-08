<template>
  <v-sheet class="pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="700" title="Product Add">
      <v-container>
        <br>
        <form @submit.prevent="submit">
          <v-text-field density="compact" variant="outlined" label="Product Name" v-model="product.productName" />
          <v-select
              density="compact"
              variant="outlined"
              label="Category"
              v-model="product.categoryId"
              :items=parseCategories
          />
          <v-text-field density="compact" variant="outlined" label="Price" v-model.number="product.price" />
          <v-textarea density="compact" variant="outlined" label="Description" v-model="product.description" />
          <v-file-input density="compact" variant="outlined" label="Image" prepend-icon="mdi-camera" v-model="product.image" />
          <v-btn color="blue" class="me-4" type="submit" @click="saveProduct">Submit</v-btn>
          <v-btn @click="handleReset" color="red">Clear</v-btn>
        </form>
      </v-container>
    </v-card>
  </v-sheet>
</template>

<script>
import axios from 'axios';

export default {
  name: "CreateProduct",
  data() {
    return {
      product: {
        productName: "",
        categoryId: "",
        description: "",
        price: "",
        image: null,
      },
      categories: [],
      parseCategories: []
    };
  },
  mounted() {
    this.loadCategories();
  },
  methods: {
    loadCategories() {
      axios.get('http://127.0.0.1:8000/api/categories/')
          .then(response => {
            this.categories = response.data;
            console.log('category', response.data);
            this.parseCategories = this.categories.map((category) => {
              return category.category_title;
            });
          })
          .catch(error => {
            console.log(error);
          })
    },
    saveProduct() {
      let formData = new FormData();
      formData.append("product_name", this.product.productName);
      formData.append("category_id", this.product.categoryId);
      formData.append("description", this.product.description);
      formData.append("price", this.product.price);
      formData.append("image", this.product.image);

      axios.post('http://127.0.0.1:8000/api/product/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
          .then(response => {
            console.log(response.data);
            this.handleReset();
            this.$router.push({ name: 'ProductList' });
          })
          .catch(error => {
            console.log(error);
          })
    },
    handleReset() {
      this.product.productName = '';
      this.product.categoryId = '';
      this.product.price = '';
      this.product.description = '';
      this.product.image = null;
    },
  }
};
</script>

<style scoped>
.v-main {
  flex: none!important;
}
</style>
