<template>
  <div class="container text-align-center">
    <br>
    <br>
    <br>
    <div class="iframebox">
      <iframe
        :src="`https://www.youtube.com/embed/${videoId}`"
        frameborder="0" allowfullscreen
      ></iframe>
    </div>
    <div class="text-align-right">
      <b-button variant="outline-primary" @click="addZzim">찜하기</b-button>
    </div>
    <review-list :videoId='videoId'></review-list>
  </div>
</template>

<script>
import ReviewList from "@/components/review/ReviewList.vue";
export default {
  name: "VideoDetail",
  components: {
    ReviewList,
  },
  data() {
    return {
      videoId: null,
      zzim:{
        zzimNo : 0,
        zzimUserId : sessionStorage.getItem('userId') ,
        zzimVideoId : null,
      }
    };
  },
  created() {
    const pathName = new URL(document.location).pathname.split("/");
    const videoId = pathName[pathName.length - 1];
    this.videoId = videoId;
    this.zzim.zzimVideoId = videoId;
    this.$store.dispatch("getVideo", videoId);
  },
  methods:{
    addZzim() {
        alert("찜 목록에 추가되었습니다.");
        this.$store.dispatch("addZzim", this.zzim);
    },
  }
};
</script>

<style scoped>
.text-align-center{
  text-align: center;
}.text-align-right{
  margin-top: 5px;
  text-align: right;
}.iframebox {
  width: 100%;
  height : 550px
  }
.iframebox iframe {
  width: 100%;
  height: 100%;
}
</style>