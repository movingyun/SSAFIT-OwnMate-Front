<template>
  <div class="container">
    <br />
    <br />
    <br />
    <h2>찜리스트</h2>

    <!-- 조회수 순으로 비디오 뽑아주기 -->
    <button
      type="button"
      class="btn btn-secondary margin3"
      style="width: 150px; height: 50px"
    >
      💙 찜한영상 💚
    </button>
    <!-- 영상 나오는 곳 -->
    <div class=".container-md d-flex justify-content-start flex-wrap">
      <div v-for="zzim in zzims" :key="zzim.zzimVideoId"  >
        <div v-for="video in allVideos" :key="video.videoId" class="">
          <div v-if="zzim.zzimVideoId === video.videoId" class="left-padding">
            <!-- 카드 -->
            <div class="card h-200" style="width: 310px">
              <iframe
                :src="`https://www.youtube.com/embed/${video.videoId}`"
              ></iframe>
              <div class="card-body">
                <h5 class="videotitle">
                  <b-link :to="`/video/${video.videoId}`">{{
                    video.videoTitle
                  }}</b-link>
                </h5>
                <div class="videotext d-flex justify-content-between">
                  <div>
                    <div>{{ video.videoChannel }}</div>
                    <div>조회수 : {{ video.videoViewCnt }}</div>
                  </div>
                  <div>
                    <span >
                      <b-button :idx="zzim.zzimNo" variant="outline-danger" class="btn-sm" @click="deleteZzim">
                        삭제
                      </b-button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="d-flex justify-content-start flex-wrap"
              style="margin: 1%"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ZzimView",
  computed: {
    ...mapState(["zzims"]),
    ...mapState(["allVideos"]),
  },
  data() {
    return {
      thisZzimNo: 0,
    };
  },
  created() {
    console.log("create됐다")
    this.$store.dispatch("getZzim");
  },
  methods:{
    deleteZzim() {
      alert("삭제되었습니다.");
      let idx = event.target.getAttribute("idx");
      this.$store.dispatch("deleteZzim", idx);
    },
  }
};
</script>

<style scoped>
.left-padding {
  padding-left: 45px;
}
.videotitle {
  font-size: 15px;
}
.videotext {
  font-size: 13px;
  padding: 0px;
}
.text-align-center {
  text-align: center;
}
.margin3 {
  margin: 3%;
}
.marginb3 {
  margin-bottom: 3%;
  margin-left: 3%;
  margin-right: 3%;
}
</style>
