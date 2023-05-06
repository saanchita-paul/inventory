<template>
  <v-sheet class=" pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="700"  title="Product Add">
  <v-container>

    <br>
        <form @submit.prevent="submit">
          <v-text-field  density="compact" variant="outlined"
              label="Product Name"
          ></v-text-field>

          <v-select  density="compact" variant="outlined"
              label="Category"
              :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          ></v-select>

          <v-text-field  density="compact" variant="outlined"
              label="Price"
          ></v-text-field>

          <v-textarea  density="compact" variant="outlined"
              label="Description"
          ></v-textarea>

          <v-btn color="blue"
              class="me-4"
              type="submit"
          >
            submit
          </v-btn>
          <v-btn @click="handleReset" color="red">
            clear
          </v-btn>
        </form>

  </v-container>
    </v-card>
  </v-sheet>

</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' }
      ]
    }
  },
  methods:{
    handleReset() {
      this.name = '';
      this.category = '';
      this.price = '';
      this.description = '';
    }
  }
}
</script>
<style scoped>

.v-main {
  flex: none!important;
}
</style>