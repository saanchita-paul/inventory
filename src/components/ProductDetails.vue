<template>
  <v-container
      class="fill-height"
      fluid
  >
    <v-card>
      <v-img style="object-fit: cover;"
             :src="product.image"
             height="300"
             width="650"
             class="mx-auto image"
      ></v-img>
      <v-container class="mx-auto details">

        <v-row>
          <v-col cols="4">
            <h4>Product Name:</h4>
          </v-col>
          <v-col cols="4">
            <p>{{ product.product_name }}</p>
          </v-col>
        </v-row>
        <v-row v-if="product.category">
          <v-col cols="4">
            <h4>Category:</h4>
          </v-col>
          <v-col cols="4">
            <p>{{product.category.category_title }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <h4>Price:</h4>
          </v-col>
          <v-col cols="4">
            <p>{{ product.price }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <h4>Description:</h4>
          </v-col>
          <v-col cols="4">
            <p style="text-align: justify">{{product.description}}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data()
  {
    return {
      product: {},
    };
  },
  created() {
    this.fetchProduct();
  },
  methods:{
    async fetchProduct() {
      try{
        const productId = this.$route.params.id;
        const response = await axios.get(`http://127.0.0.1:8000/api/product/view/${productId}`);
        this.product = response.data;
        console.log('details', this.product);
      } catch (error){
        console.log(error);
      }
    }
  }
}
</script>

<style>
.details {
  text-align: center;
  padding: 20px 0px 0px 180px;
}
.image {
  object-fit: cover!important;
}
</style>