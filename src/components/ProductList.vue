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
      <v-data-table
          :headers="headers"
          :items="desserts"
          :sort-by="[{ key: 'calories', order: 'asc' }]"
          class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar style="display: none"
              flat
          >
            <v-divider
                class="mx-4"
                inset
                vertical
            ></v-divider>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
              size="small"
              class="me-2"
              @click="detailsPage"
          >
            mdi-eye
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn
              color="primary"
              @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

  </v-container>

</template>


<script>
export default {
  data: () => ({
    headers: [
      {
        title: 'Product Name',
        align: 'start',
        sortable: false,
        key: 'name',
      },
      { title: 'Category', key: 'calories' },
      { title: 'Price', key: 'fat' },
      { title: 'QTY', key: 'carbs' },
      { title: 'Created By', key: 'protein' },
      { title: 'Actions', key: 'actions', sortable: false },
    ],
    desserts: [],
    details: [
      {
        name: 'Frozen Yogurt',
        category: 'red',
        price: 159,
        description: 'Lorem Ipsum',
      },
      {
        name: 'Ice cream sandwich',
        category: 'blue',
        price: 159,
        description: 'Lorem Ipsum',
      },
      {
        name: 'Eclair',
        category: 'green',
        price: 159,
        description: 'Lorem Ipsum',
      },
    ],

  }),


  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.desserts = [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
        },
      ]
    },


    addProduct() {
      this.$router.push({
        name: 'CreateProduct'
      })
    },
    detailsPage() {
      this.$router.push({
        name: 'ProductDetails'
      })
    }
  },

}
</script>
