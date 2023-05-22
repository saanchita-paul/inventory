<template>
  <v-sheet class="pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="700">
      <v-row>
        <v-col cols="9">
          <h2>Product Add</h2>
        </v-col>
        <v-col cols="3">
          <v-btn color="black" @click="backToList">Back</v-btn>
        </v-col>
      </v-row>
      <v-container>
        <br>
        <form @submit.prevent="submit" enctype="multipart/form-data">
          <v-text-field density="compact" variant="outlined" label="Product Name" v-model.trim="product.product_name" />
          <v-select
              density="compact"
              variant="outlined"
              label="Category"
              v-model="product.category_id"
              :items=categories
              item-value="id"
              item-text="category_title"
          />
          <v-text-field density="compact" variant="outlined" label="Price" v-model="product.price" />
          <v-textarea density="compact" variant="outlined" label="Description" v-model="product.description" />
          <v-text-field density="compact" variant="outlined" label="Unit" v-model="product.unit" />
          <v-file-input  accept="image/*" type="file" density="compact" variant="outlined" label="Image" prepend-icon="mdi-camera" @change="onChange" />
          <v-btn color="blue" class="me-4" type="submit" @click="saveProduct">Submit</v-btn>
          <v-btn @click="handleReset" color="red">Clear</v-btn>
        </form>
      </v-container>
    </v-card>
  </v-sheet>
</template>

<script>
import axios from 'axios';
import ProductService, {insertProduct} from "../services/ProductService.js";

export default {
  name: "CreateProduct",
  data() {
    return {
      product: {
        product_name: "",
        category_id: "",
        description: "",
        price: "",
        image: null,
        unit: "",
        file: ''
      },
      categories: [],
    };
  },

  mounted() {
    this.loadCategories();
  },
  methods: {
    onChange(e) {
      this.product.file = e.target.files[0];
    },
    backToList()
    {
      this.$router.push({
        name: 'ProductList'
      })
    },
    async loadCategories() {
      const response = await ProductService.category();
      this.categories = response.data.map(category => ({
        id: category.id,
        title: category.category_title
      }));
    },
    async saveProduct () {
      // Create a new FormData instance
      const formData = new FormData();

      // Append the product data to the formData object
      formData.append('product_name', this.product.product_name);
      formData.append('category_id', this.product.category_id);
      formData.append('description', this.product.description);
      formData.append('price', this.product.price);
      formData.append('unit', this.product.unit);
      formData.append('image', this.product.file);
      // Check if an image file is selected
      // if (this.product.image && this.product.image.length > 0) {
      //   const imageFile = this.product.image[0];
      //   formData.append('image', imageFile, imageFile.name);
      // }
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };

      // Call the API to insert the product with the FormData
      const response = await ProductService.insertProduct(formData,config);
      console.log('create prod', response);
    },
    handleFileInput(fileList) {
      this.product.image = Array.from(fileList);
    },

    handleReset() {
      this.product.product_name = '';
      this.product.category_id = '';
      this.product.price = '';
      this.product.description = '';
      this.product.image = null;
      this.product.unit = '';
    },
  }
};
</script>

<style scoped>
.v-main {
  flex: none!important;
}
</style>
