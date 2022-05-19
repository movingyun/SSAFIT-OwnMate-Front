<template>
  <div>
    <h2>환영합니다</h2>
    <div class="d-flex justify-content-center flex-wrap">
      <div v-for="video in videos" :key="video.videoId">
        <div class="iframestyle" style="margin: 1%">
          <iframe width="550" height="300" :src="video.videoUrl" :key="video.videoUrl"> </iframe>
          <div class="videotitle">
            {{video.videoTitle}}
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
