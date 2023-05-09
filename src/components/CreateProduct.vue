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
        <form @submit.prevent="submit">
          <v-text-field density="compact" variant="outlined" label="Product Name" v-model.trim="product.product_name" />
          <v-select
              density="compact"
              variant="outlined"
              label="Category"
              v-model="product.category_id"
              :items=parseCategories
              item-value="id"
              item-text="category_title"
          />
          <v-text-field density="compact" variant="outlined" label="Price" v-model.trim="product.price" />
          <v-textarea density="compact" variant="outlined" label="Description" v-model.trim="product.description" />
          <v-text-field density="compact" variant="outlined" label="Unit" v-model.trim="product.unit" />
          <v-file-input  accept="image/*" density="compact" variant="outlined" label="Image" prepend-icon="mdi-camera" v-model="product.image" />
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
        product_name: "",
        category_id: "",
        description: "",
        price: "",
        image: null,
        unit: "",
      },
      categories: [],
      parseCategories: []
    };
  },
  mounted() {
    this.loadCategories();
  },
  methods: {
    backToList()
    {
      this.$router.push({
        name: 'ProductList'
      })
    },
   async loadCategories() {
     await axios.get('http://127.0.0.1:8000/api/categories/')
          .then(response => {
            this.categories = response.data;
            console.log('category', response.data);
            this.parseCategories = this.categories.map((category) => {
              return {
                id: category.id,
                title: category.category_title
              };
            });
          })
          .catch(error => {
            console.log(error);
          })
    },

    async saveProduct () {
      await axios.post('http://127.0.0.1:8000/api/product/create', {
        product_name: this.product.product_name,
        category_id: this.product.category_id,
        description: this.product.description,
        price: this.product.price,
        image: this.product.image,
        unit: this.product.unit,
      })
          .then((response) => {
            console.log('create', response.data);
            this.$router.push({ name: 'ProductList' });
          })
          .catch((error) => {
            console.log(error);
          });
    },

    handleReset() {
      this.product.product_name = '';
      this.product.category_id = '';
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
