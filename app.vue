<template>
  <div>
    <v-container fluid class="mx-0 px-0 pt-0 mb-0">
      <v-carousel
        :continuous="false"
        :show-arrows="false"
        hide-delimiter-background
        delimiter-icon="mdi mdi-cat"
        light
        height="400"
        interval = "10000"
        class="ma-0 mt-n16"

      >
          <v-carousel-item
            class="mt-n16"
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            cover
          ></v-carousel-item>
    </v-carousel>
    </v-container>
    <v-container class="text-center mb-16">
        <h4 class="text-h5 text-md-h4 mb-2">
          <b>
            Find your new friend in your location
          </b>
        </h4>
        <h4 style="color: gray;">
          choose your favorite pet near your place with our app. And dont forget to rate us
        </h4>
    </v-container>
    <v-container class="text-center">
        <NuxtLink to="/home">
          <v-btn class="rounded-lg" color="secondary" style ="text-transform: none;">
            Masuk
          </v-btn>
        </NuxtLink>
    </v-container>
  </div>
</template>

<script>
// import colors from 'vuetify/es5/util/colors';

export default {
  name: 'IndexPage',
  mounted(){
    // this.$store.commit('global/set_path', '/')
  },  
  data(){
    return {
      items: [
          {
            src: '/pic/1.jpg',
          },
          {
            src: '/pic/2.jpg',
          },
          {
            src: '/pic/3.jpg',
          },
          {
            src: '/pic/4.jpg',
          },
        ]
    }
  }
}
</script>
<style>
/* .v-btn > .v-btn__content .v-icon {
  color: #1976d2;
} */

.v-carousel__controls__item{
  margin: 0 0px;
}
</style>