<template>
  <div>
      <NuxtPage />
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
      colorMode : useColorMode(),
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