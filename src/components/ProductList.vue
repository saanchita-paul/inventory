<template>
  <v-container>
    <v-row>
      <v-col cols="9">
        <h2>Product List</h2>
      </v-col>
      <v-col cols="3">
        <v-btn @click="addProduct" color="blue">+ Add New Product</v-btn>
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
            label="Search product name.."
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
              @click="detailsPage(item.value.id)"
          >
            mdi-eye
          </v-icon>
        </template>
      </v-data-table-server>
    </v-card>
  </v-container>

</template>


<script>
import ProductService from "../services/ProductService.js";

export default {
  data: () => ({
    headers: [
      {title: 'Product Name', align: 'start', sortable: false, key: 'product_name',},
      { title: 'Category', key: 'category.category_title' },
      { title: 'Price', key: 'price' },
      { title: 'Unit', key: 'stock.unit' },
      { title: 'QTY', key: 'stock.quantity' },
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
    detailsPage(id) {
      console.log('item', id);
      this.$router.push(`/dashboard/product/${id}`);
    },
    async loadProducts() {
      this.loading = true;
      const { page, per_page, search } = this.pagination;
      try {
        const response = await ProductService.listProduct(page, per_page, this.search);
        this.pagination.total = response.total;
        this.products = response.data;
        console.log('jjj', response);
      } catch (error) {
        console.log('Error loading products:', error);
      }
      this.loading = false;
    },
  },

}
</script>
