<template>
  <div id="app">
    <!-- <Home /> -->
    <router-view/>
  </div>
</template>

<script>
import Home from '@/views/home/home.vue'
export default {
  data(){
    return {
      
    }
  },
  components:{
    Home
  }
}
</script>

<style lang="less">
  @import './assets/common/css/normalize.css';
  
</style>
