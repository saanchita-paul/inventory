<template>
  <v-container>
    <v-row>
      <v-col cols="9">
        <h2>Product List</h2>
      </v-col>
      <v-col cols="3">
        <v-btn @click="addProduct" color="green">+ Add New Product</v-btn>
      </v-col>
    </v-row>
    <br>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
            density="compact"
            rounded
            variant="outlined"
            v-model="search"
            prepend-inner-icon="mdi-magnify"
            label="Search name.."
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table-server
          v-model:items-per-page="pagination.per_page"
          :search="search"
          :headers="headers"
          :items-length="pagination.total"
          :items="products"
          :loading="loading"
          class="elevation-1"
          item-value="name"
          @update:options="loadProducts"
      >
        <template v-slot:item.actions="{ item }">
          <v-icon
              size="small"
              class="me-2"
              @click="detailsPage"
          >
            mdi-eye
          </v-icon>
        </template>

      </v-data-table-server>


    </v-card>

  </v-container>

</template>


<script>
import axios from "axios";

export default {
  data: () => ({
    headers: [
      {title: 'Product Name', align: 'start', sortable: false, key: 'product_name',},
      { title: 'Category', key: 'category_id' },
      { title: 'Price', key: 'price' },
      // { title: 'QTY', key: 'price' },
      { title: 'Created By', key: 'created_at' },
      { title: 'Actions', key: 'actions', sortable: false },
    ],
    products: [],
    loading: true,
    search: '',
    pagination: {
      total: 0,
      page: 1,
      per_page: 10
    }

  }),


  methods: {

    addProduct() {
      this.$router.push({
        name: 'CreateProduct'
      })
    },
    detailsPage() {
      this.$router.push({
        name: 'ProductDetails'
      })
    },
    async loadProducts({ page, itemsPerPage, sortBy, search }) {
      this.loading = true
      const response = (await axios.get('http://127.0.0.1:8000/api/products',
          {params: {per_page: itemsPerPage, page: page, search: search}})).data
      this.pagination.total = response.total;
      this.products = response.data;
      console.log(response, 'usr')
      this.loading = false;
    },
  },

}
</script>
