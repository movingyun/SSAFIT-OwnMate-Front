<template>
  <div>
    <img src="@/assets/cover.png" width="100%" />
    <div class="d-flex justify-content-around flex-wrap">
      <div v-for="video in videos" :key="video.videoId">
        <div class="iframestyle" style="margin: 1%">
          <iframe width="550" height="300" :src='`https://www.youtube.com/embed/${video.videoId}`'></iframe>
          <div class="videotitle">
            <b-link :to="`/video/${video.videoId}`">{{video.videoTitle}}</b-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default{
    name:"VideoList",
    computed:{
      ...mapState([
        "videos"
      ]),

    },
    created(){
      this.$store.dispatch('getVideos')
    },
    
  }
</script>

<style scoped>
.text-align-center{
  text-align: center;
}
</style>
