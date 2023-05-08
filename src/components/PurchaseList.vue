<template>
  <v-container>
    <v-row>
      <v-col cols="9">
        <h2>Product List</h2>
      </v-col>
      <v-col cols="3">
        <v-btn @click="addPurchase" color="blue">+ Add New Purchase</v-btn>
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
            label="Search supplier name.."
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table-server
          v-model:items-per-page="pagination.per_page"
          :search="search"
          :headers="headers"
          :items-length="pagination.total"
          :items="purchases"
          :loading="loading"
          class="elevation-1"
          item-value="name"
          @update:options="loadPurchases"
      >
        <template v-slot:item.status="{ item }">
          <v-chip :color="getStatusColor(item.raw.status)">
            {{ item.raw.status }}
          </v-chip>
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
      {title: 'Supplier Name', align: 'start', sortable: false, key: 'supplier_name',},
      { title: 'Date', key: 'date' },
      { title: 'Invoice Number', key: 'invoice_no' },
      { title: 'Status', key: 'status', sortable: false },
    ],
    purchases: [],
    loading: true,
    search: '',
    pagination: {
      total: 0,
      page: 1,
      per_page: 10
    }

  }),


  methods: {

    addPurchase() {
      this.$router.push({
        name: 'AddNewPurchase'
      })
    },

    async loadPurchases({ page, itemsPerPage, sortBy, search }) {
      this.loading = true
      const response = (await axios.get('http://127.0.0.1:8000/api/purchase/list',
          {params: {per_page: itemsPerPage, page: page, search: search}})).data
      this.pagination.total = response.total;
      this.purchases = response.data;
      console.log(response, 'purchase')
      this.loading = false;
    },
    getStatusColor (status) {
      if (status && status.toLowerCase() === 'pending') return 'red'
      else if (status && status.toLowerCase() === 'ordered') return 'yellow'
      else if (status) return 'green'
    },
  },

}
</script>
