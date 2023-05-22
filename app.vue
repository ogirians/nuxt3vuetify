<template>
  <div>
    <v-container fluid class="mx-0 px-0 pt-0 mb-6">
      <v-carousel
        :continuous="false"
        :show-arrows="false"
        hide-delimiter-background  
        hide-delimiters      
        light
        height="400"
        cycle  
        itnterval="1000"    
        class="ma-0"
        v-model="model"
      >
          <v-carousel-item
            class="mt-n16"
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            cover
          ></v-carousel-item>
      </v-carousel>
      <div class="text-center mt-5">
        <v-icon @click="model = 0" :icon="model == 0 ? 'mdi-minus-thick' : 'mdi-square-small'"></v-icon>
        <v-icon @click="model = 1" :icon="model == 1 ? 'mdi-minus-thick' : 'mdi-square-small'"></v-icon>
        <v-icon @click="model = 2" :icon="model == 2 ? 'mdi-minus-thick' : 'mdi-square-small'"></v-icon>
        <v-icon @click="model = 3" :icon="model == 3 ? 'mdi-minus-thick' : 'mdi-square-small'"></v-icon>
      </div>
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
          <v-btn class="rounded-lg" color="primary" style ="text-transform: none;">
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
    this.colorMode.preference = 'grey';
  },  
  data(){
    return {
      model: 0,
      colorMode : useColorMode(),
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