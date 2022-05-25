<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view/>
  </div>
</template>

<script>
  import HeaderNav from "@/components/common/HeaderNav.vue"
  
  export default {
  components: { 
    HeaderNav
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Do+Hyeon:400');
#app{
font-family: 'Do Hyeon', sans-serif;
}
</style>
