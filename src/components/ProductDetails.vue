<template>
  <v-container
      class="fill-height"
      fluid
  >
    <v-card>
      <v-img style="object-fit: cover;"
          src="https://picsum.photos/350/165?random"
          height="300" width="650"
          class="mx-auto image"
      ></v-img>
      <v-container class="mx-auto details">

        <v-row>
          <v-col cols="4">
            <h4>Product Name:</h4>
          </v-col>
          <v-col cols="4">
            <p>First Product</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <h4>Category:</h4>
          </v-col>
          <v-col cols="4">
            <p>Category 1</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <h4>Price:</h4>
          </v-col>
          <v-col cols="4">
            <p>1234</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <h4>Description:</h4>
          </v-col>
          <v-col cols="4">
            <p style="text-align: justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
              nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid. 4</p>
          </v-col>
        </v-row>
      </v-container>


    </v-card>





  </v-container>
</template>

<style>
.details {
  text-align: center;
  padding: 20px 0px 0px 180px;
}

.image {
  object-fit: cover!important;
}
</style>