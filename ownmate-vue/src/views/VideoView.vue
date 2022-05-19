<template>
  <div class="container">
      <!-- <div class="d-flex justify-content-center flex-wrap">
      <div v-for="video in videos" :key="video.videoId">
        <div class="iframestyle" style="margin: 1%">
          <iframe width="550" height="300" :to="{videoUrl}"> </iframe>
          <div class="videotitle">
            {{video.videoTitle}}
          </div>
        </div>
      </div>
    </div> -->
    <b-table-simple hover responsive class="text-center">
        <b-tr>
            <b-th>아이디</b-th>
            <b-th>제목</b-th>
            <b-th>파트</b-th>
            <b-th>채널</b-th>
            <b-th>url</b-th>
            <b-th>조회수</b-th>
        </b-tr>
        <b-tr v-for="video in videos" :key="video.videoId">
            <b-td>{{video.videoId}}</b-td>
            <b-td>{{video.videoTitle}}</b-td>
            <b-td>{{video.videoPart}}</b-td>
            <b-td>{{video.videoChannel}}</b-td>
            <b-td>{{video.videoUrl}}</b-td>
            <b-td>{{video.videoViewCnt}}</b-td>

        </b-tr>
    </b-table-simple>

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

<style>

</style>