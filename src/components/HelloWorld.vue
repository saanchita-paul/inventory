<template>
  <header>

      <v-app-bar color="white">
          <v-img src="../src/assets/logo.png"></v-img>
          <v-toolbar-title class="header">Home</v-toolbar-title>
          <v-toolbar-title class="header">Products</v-toolbar-title>
          <v-toolbar-title class="header">Pricing</v-toolbar-title>
          <v-toolbar-title class="header">Be a Reseller</v-toolbar-title>
          <v-toolbar-title class="header">Blog</v-toolbar-title>
          <v-toolbar-title class="header" >Gallery</v-toolbar-title>
          <v-toolbar-title class="header"> Contact Us</v-toolbar-title>
      </v-app-bar>
  </header>

    <section className='intro'>

      <div className='introDescription' data-aos="zoom-in"
           data-aos-duration="1500"
           data-aos-delay='500'>
        <br>
        <v-container>
          <router-link style="text-decoration: none" color="blue" variant="outlined" class="login" to="/login">Login</router-link>
          <p> Sokrio Distribution Management System</p>
        </v-container>

      </div>
      <img className='introImage'
           src='../assets/sokrio_dashboard.png'/>

    </section>

    <section className='guide1'>
      <img className='guide1Image'
           src='../assets/image2.png'
           data-aos="slide-down"
           data-aos-ease='ease'
           data-aos-duration="1500"
           data-aos-delay='500'/>
      <div className='guide1Description'
           data-aos="slide-up"
           data-aos-ease='ease'
           data-aos-duration="1500"
           data-aos-delay='1000'>
        <h1> Why SOKRIO? </h1>
        <div>
          Save up to 38 SR's annual salaries for
          <br>
          every 100-member  sales team!
        </div>
      </div>


    </section>

    <section className='guide2'>
      <div className='guide2Description'
           data-aos="slide-down"
           data-aos-ease='ease'
           data-aos-duration="1500"
           data-aos-delay='1000'>
        <h1> Who We Are?</h1>
        <div>
          Sokrio Technologies Ltd. is a team comprised
          <br>
          of multi-industry experienced, ambitious individuals.
          <br>
          We genuinely keep our customers at the core of our business and
          <br>
          strive to deliver a "wow factor" to our customers!
          <br>
          We believe in continuous development, and
          <br>
          always aim to deliver positive customer experiences for our stakeholders.
        </div>
      </div>
      <img className='guide2Image'
           src='../assets/initial-image.png'
           data-aos="slide-up"
           data-aos-duration="1500"
           data-aos-ease='ease'
           data-aos-delay='1000'
      />

    </section>

    <footer>
      Copyright 2023 Sokrio
    </footer>

</template>


<style>
* {
  margin: 0;
  padding: 0;
}

.intro {
  display: flex;
  background: #fff3e2;
  justify-content: space-evenly;
  padding-top: 80px;
  height: 500px;
}

.introDescription {
  font-size: 30px;
  color: #632b2b;
  padding-top: 120px;
}

.introDescription p {
  font-size: 40px;
  color: #632b2b;
  font-weight: 900;
}

.guide1 {
  display: flex;
  background: #ffd4a9;
  justify-content: space-evenly;
  padding-top: 80px;
  height: 500px;
  overflow: hidden;
}

.guide1Description h1 {
  font-size: 48px;
  color: #632b2b;
  padding: 120px 0px 20px 0px;
}

.guide1Description div {
  background: #fff3e2;
  color: #632b2b;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
}


.guide2 {
  display: flex;
  background: #fff3e2;
  justify-content: space-evenly;
  padding-top: 80px;
  height: 500px;
  overflow: hidden;
}

.guide2Description h1 {
  font-size: 48px;
  color: #632b2b;
  padding: 120px 0px 20px 0px;
}

.guide2Description div {
  background: #ffd4a9;
  color: #632b2b;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
}

footer {
  background: #ffd4a9;
  color: #632b2b;
  padding: 10px;
  text-align: right;
  font-weight: 900;
}

/* responsiveness */
@media screen and (max-width: 500px) {

  .intro {
    display: block;
    padding-top: 10px;
    height: auto;
  }

  .introImage {
    width: 100%;
  }

  .introDescription {
    padding: 30px 0px 0px 20px;
  }

  .guide1 {
    display: block;
    padding-top: 10px;
    height: auto;
  }

  .guide1Image {
    width: 100%;
  }

  .guide1Description {
    padding: 20px;
  }

  .guide1Description h1 {
    padding: 30px 0px;
  }

  .guide2 {
    display: block;
    padding-top: 10px;
    height: auto;
  }

  .guide2Image {
    width: 100%;
  }

  .guide2Description {
    padding: 20px;
  }

  .guide2Description h1 {
    padding: 30px 0px;
  }

}
.header {
  font-size: 16px!important;
  padding: 0!important;
  cursor: auto;
}

.login{
  background: #535bf2;
  color: white;
  padding: 14px;
  font-size: 16px;
  border-radius: 5px;
}
.login:hover{
  background: rgba(42, 43, 53, 0.78);
  color: white;
}

</style>

<script>

export default {
}
</script>