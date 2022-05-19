<template>
  <div class="container">
    {{video.videoId}}
  </div>
</template>

<script>
import {mapState} from 'vuex'

  export default{
    name:"VideoDetail",
    computed:{
      ...mapState([
          "video"
      ]),
    },
    created(){
        this.$store.dispatch('getVideo')
    },


  }
</script>

<style>

</style>