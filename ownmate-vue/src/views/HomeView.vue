<template>
  <div>
    <!-- 로고 사진 -->
    <div id="backImg">
      <img src="@/assets/cover2.jpg" width="100%" height="750" />
      <b-button class="goBtn"><a id="scroll4" href="#start" class="w-btn-outline w-btn-skin-outline" >🏋️‍♂️Get Start!!</a></b-button>
    </div>
    <div id="start"></div>
    <br>
    <br>
    <br>

    <div class="container">
      <div class="d-flex input-group mb-2">
        <b-form-input
          size="sm"
          class="mr-md-2"
          placeholder="검색어를 입력해주세요."
          type="text"
          v-model.lazy="keyword"
          @keyup.enter="videosearch"
        ></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" @click="videosearch"
          >Search</b-button
        >
      </div>
      <div>
        <button
          type="button"
          class="btn btn-secondary margin3"
          style="width: 150px; height: 50px"
        >
          검색결과🔍
        </button>
        <div v-if="this.videos.length != this.allVideos.length">
        <div class="d-flex justify-content-start flex-wrap .container-md left-padding">
          <div v-for="video in videos" :key="video.videoId">
              <!-- 카드 -->
              <div class="card h-300" style="width: 310px">
                <iframe
                  :src="`https://www.youtube.com/embed/${video.videoId}`"
                ></iframe>
                <div class="card-body">
                  <h5 class="videotitle">
                    <b-link :to="`/video/${video.videoId}`">{{
                      video.videoTitle
                    }}</b-link>
                  </h5>
                  <div class="videotext">
                    <div>{{ video.videoChannel }}</div>
                    <div>조회수 : {{ video.videoViewCnt }}</div>
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
      <!-- 조회수 순으로 비디오 뽑아주기 -->
      <button
        type="button"
        class="btn btn-secondary margin3"
        style="width: 150px; height: 50px"
      >
        인기영상🔥
      </button>
        <div class="d-flex justify-content-center flex-wrap .container-md">
          <div v-for="video in videos3" :key="video.videoId">
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
                  <div class="videotext">
                    <div>{{ video.videoChannel }}</div>
                    <div>조회수 : {{ video.videoViewCnt }}</div>
                  </div>
                </div>
              </div>
              <div
                class="d-flex justify-content-start flex-wrap"
                style="margin: 1%"
              ></div>
          </div>
        </div>
      <!-- 부위별 영상 추천 -->
      <div>
        <div class="d-flex flex-row mb-3">
          <button
            type="button"
            class="btn btn-secondary margin3"
            style="width: 150px; height: 50px"
          >
            부위별 영상🦾🦿
          </button>
          <div class="form-check marginb3">
            <br /><br />
            <b-form-group class="mb-0" >
              <b-form-radio-group
                class="pt-2 text-align-left"
                :options="['상체', '하체', '전신', '복부']"
                v-model="part"
              ></b-form-radio-group>
            </b-form-group>
          </div>
        </div>

        <!-- 영상 나오는 곳 -->
        <div class="d-flex justify-content-center flex-wrap .container-md">
          <div v-for="video in allVideos" :key="video.videoId">
            <div v-if="video.videoPart === part">
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
                  <div class="videotext">
                    <div>{{ video.videoChannel }}</div>
                    <div>조회수 : {{ video.videoViewCnt }}</div>
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
  </div>
</template>

<script>
import { mapState } from "vuex";
import VideoView from "@/views/VideoView.vue";
export default {
  name: "VideoList",
  computed: {
    ...mapState(["videos"]),
    ...mapState(["videos3"]),
    ...mapState(["allVideos"]),
    ...mapState(["isLogin"]),
  },
  created() {
    this.$store.dispatch("getVideos");
    this.$store.dispatch("getVideos3");
  },
  component: {
    VideoView,
  },
  data() {
    return {
      part: "상체",
      keyword: "",
    };
  },
  methods: {
    videosearch() {
      const payload = {
        keyword: this.keyword,
      };
      this.$store.dispatch("getVideos", payload);
    },
  },
};
</script>

<style scoped>
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
.videotitle {
  font-size: 15px;
}
.videotext {
  font-size: 13px;
  padding: 0px;
}
.left-padding {
  padding-left: 45px;
}
.h-200{
  height: 300px;
  margin-left: 10px;
  margin-right: 10px;
}
.h-300{
  height: 300px;
  margin-left: 20px;
}#testImg{
  position : relative;
  width: 700px;
  height: 350px;
}.goBtn {
  background-color: white;
  position: absolute;
  top: 70%;
  left : 45%;
  font-size: 30px;
}#scroll4{
  text-decoration: none;
  color: black;
}
</style>
