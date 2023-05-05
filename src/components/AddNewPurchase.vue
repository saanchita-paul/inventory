<template>
  <v-container>
    <v-row>
      <v-col cols="9">
        <h2>New Purchase</h2>
      </v-col>
      <v-col cols="3">
      </v-col>
    </v-row>
    <br>
    <v-card>
      <v-row>
        <v-col cols="4">
          <v-text-field>Date</v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field>Invoice No.</v-text-field>
        </v-col>
        <v-col cols="4">
          <v-select
              label="Supplier"
              :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          ></v-select>
        </v-col>
      </v-row>
      <v-data-table
          :custom-filter="filterOnlyCapsText"
          :headers="headers"
          :items="desserts"
          :search="search"
          class="elevation-1"
          item-value="name"
      >
        <template v-slot:item.fat="{ item }">
          <div class="d-flex align-center">
            <v-btn fab small color="primary" @click="item.fat--">
              <v-icon>mdi-minus</v-icon>
            </v-btn>
            <v-text-field v-model="item.fat" class="mx-2"></v-text-field>
            <v-btn fab small color="primary" @click="item.fat++">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
        </template>
        <template v-slot:top>
          <p class="p-title">Products</p>
          <v-text-field
              v-model="search"
              label="Product Name"
              class="pa-4"
          ></v-text-field>
        </template>

      </v-data-table>
     <br>
      <v-row>
        <v-col cols="8">
          <v-text-field>Note</v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field>Total(ট)</v-text-field>
        </v-col>
      </v-row>
      <div class="float-end pa-5">
        <v-btn class="d-flex justify-center align-center" color="blue">Coinfirm</v-btn>
      </div>

    </v-card>

  </v-container>

</template>


<script>
export default {
  data: () => ({

    search: '',
    calories: '',
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 20,
        carbs: 24,
        tprice: 100,
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 10,
        carbs: 37,
        tprice: 100,
      },

    ],
  }),
  computed: {
    headers () {
      return [
        {
          title: 'Product Name',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        {
          title: 'Stock',
          align: 'end',
          key: 'calories',
        },
        { title: 'Quantity', align: 'end', key: 'fat' },
        { title: 'Price(ট)', align: 'end', key: 'carbs' },
        { title: 'Total Price(ট)', align: 'end', key: 'tprice' },
        // { title: 'Iron (%)', align: 'end', key: 'iron' },
      ]
    },
  },
  methods: {
    filterOnlyCapsText (value, query, item) {
      return value != null &&
          query != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(query) !== -1
    },
    addPurchase() {
      this.$router.push({
        name: 'AddNewPurchase'
      })
    },
  },

}
</script>

<style>
p.p-title {
  padding: 20px 20px 0px 20px;
}
</style>