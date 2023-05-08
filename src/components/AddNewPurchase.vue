<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <h2>New Purchase</h2>
      </v-col>
      <v-col cols="2">
        <v-btn color="black" @click="pList"> Back</v-btn>
      </v-col>
    </v-row>
    <br>
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-text-field density="compact" variant="outlined" label="Date"/>
          </v-col>
          <v-col cols="4">
            <v-text-field density="compact" variant="outlined" label="Invoice No." />
          </v-col>
          <v-col cols="4">
            <v-select density="compact" variant="outlined"
                      label="Supplier"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
            ></v-select>
          </v-col>
        </v-row>
        <v-autocomplete
            :items="products"
            :loading="loading"
            item-title="product_name"
            item-value="id"
            label="Product Name"
            v-model:search="search"
            @input="searchProducts"
            prepend-inner-icon="mdi-search"
            append-icon="home"
            @update:modelValue="onSelectProduct"
            :return-object="true"
            clearable
            density="compact"
            variant="outlined"
        ></v-autocomplete>
        <v-table>
          <thead>
          <tr>
            <th>Product Name</th>
            <th>Current Stock</th>
            <th>Quantity</th>
            <th>Price(ট)</th>
            <th>Total Price(ট)</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(product, index) in purchase.products" :key="product.id">
            <td>{{ product.product_name }}</td>
            <td>{{ product.category_id }}</td>
            <td>
              <div class="d-flex align-center">
                <v-btn fab small color="blue" @click="product.quantity--">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <v-text-field  density="compact" variant="outlined"
                               v-model="product.quantity" class="mx-2 pt-6 align-center">
                </v-text-field>
                <v-btn fab small color="blue" @click="product.quantity++">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
            </td>
            <td class="pt-5">
              <v-text-field density="compact" variant="outlined" label="Price" />
            </td>
            <td>{{ product.price * product.quantity }}</td>

            <td>
              <v-icon size="small" class="me-2" @click="deleteRow(product)">
                mdi-delete
              </v-icon>
            </td>
          </tr>
          </tbody>
        </v-table>
        <br>
        <v-row>
          <v-col cols="8">
            <v-text-field density="compact" variant="outlined" label="Note" />
          </v-col>
          <v-col cols="4 pt-5">
            <span class="pr-5">Total(ট)</span>
            <span class="totalPrice">{{ totalPrice }}</span>
          </v-col>
        </v-row>
        <div class="float-end pa-5">
          <v-btn class="d-flex justify-center align-center" color="blue">Coinfirm</v-btn>
        </div>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'
import purchaseList from "./PurchaseList.vue";

export default {
  data() {
    return {
      products: [],
      loading: false,
      search: '',
      selectedProduct: null,
      purchase: {
        date: null,
        invoiceNo: null,
        supplier: '',
        products: [],
        note: '',
        grantTotal: 0,
      },
      deleteDisabled: true,
      tableHeaders: [
        { title: 'Product Name', value: 'product_name' },
        { title: 'Category', value: 'category_id' },
        { title: 'Price', value: 'price' },
        { title: 'Action', value: 'action' },
      ],
      tableSearch: '',
    }
  },
  computed: {
    totalPrice() {
      return this.purchase.products.price * this.purchase.products.quantity;
    }
  },
  methods: {
    async searchProducts() {
      this.loading = true
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/products', {
          params: {
            search: this.search,
          },
        })
        this.products = response.data.data
        this.loading = false
      } catch (error) {
        console.error(error)
      }
    },
    onSelectProduct(product) {
      this.search = ''
      product.quantity = 1
      this.purchase.products.push(product)
      this.purchase.grantTotal += product.price
    },
    // deleteRow(item) {
    //   const index = this.purchase.products.indexOf(item)
    //   if (index > -1) {
    //     this.purchase.products.splice(index, 1)
    //   }
    // },
    deleteRow(product) {
      const index = this.purchase.products.findIndex(p => p.id === product.id);
      if (index > -1) {
        this.purchase.products.splice(index, 1);
      }
    },
    pList() {
      this.$router.push({
        name: 'PurchaseList'
      })
    }

  },
}
</script>
<style>
.v-main {
  flex: unset!important;
}
.totalPrice {
  border: #90a1a1 solid 1px;
  padding: 10px 60px;
  border-radius: 5px;
}
</style>