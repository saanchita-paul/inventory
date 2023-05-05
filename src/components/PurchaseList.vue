<template>
  <v-container>
    <v-row>
      <v-col cols="9">
        <h2>Purchase List</h2>
      </v-col>
      <v-col cols="3">
        <v-btn @click="addPurchase" color="green">+ Add New Purchase</v-btn>
      </v-col>
    </v-row>
    <br>
    <v-card>
      <v-data-table
          :custom-filter="filterOnlyCapsText"
          :headers="headers"
          :items="desserts"
          :search="search"
          class="elevation-1"
          item-value="name"
      >
        <template v-slot:item.fat="{ item }">
          <v-chip :color="getColor(item.raw.fat)">
            {{ item.raw.fat }}
          </v-chip>
        </template>
        <template v-slot:top>
          <v-text-field
              v-model="search"
              label="Search..."
              class="pa-4"
          ></v-text-field>
        </template>

      </v-data-table>
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
        fat: 'Received',
        carbs: 24,
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 'Pending',
        carbs: 37,
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 'Ordered',
        carbs: 23,
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 'Received',
        carbs: 67,
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 'Ordered',
        carbs: 49,
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 'Pending',
        carbs: 94,
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 'Received',
        carbs: 98,
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 'Ordered',
        carbs: 87,
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 'Received',
        carbs: 51,
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 'Pending',
        carbs: 65,
      },
    ],
  }),
  computed: {
    headers () {
      return [
        {
          title: 'Supplier Name',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        {
          title: 'Date',
          align: 'end',
          key: 'calories',
        },
        { title: 'Status', align: 'end', key: 'fat' },
        { title: 'Invoice Number', align: 'end', key: 'carbs' },
        // { title: 'Protein (g)', align: 'end', key: 'protein' },
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
    getColor (fat) {
      if (fat == 'Pending') return 'red'
      else if (fat == 'Ordered') return 'yellow'
      else return 'green'
    },
  },

}
</script>