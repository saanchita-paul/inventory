<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list color="transparent">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              <span class="font-weight-bold">SOKRIO</span>
            </v-list-item-title>
            <v-list-item-subtitle>Inventory Management</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <router-link
              class="sidebar" :to="{name: 'ProductList'}">Products</router-link>
        </v-list-item>
        <v-list-item>
          <router-link class="sidebar" :to="{name: 'PurchaseList'}" >Purchases</router-link>
        </v-list-item>

      </v-list>

    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
    <router-view></router-view>
  </v-app>
</template>

<script>
import ProductList from "./ProductList.vue";

export default {
  methods:{
    productList() {
      this.$router.push({
        name: 'ProductList'
      })
    }
  },
  data: () => ({ drawer: null }),
}
</script>

<style>
.sidebar{
  text-decoration: none;
}
sidebar:active {
  color: darkred!important;
}
</style>