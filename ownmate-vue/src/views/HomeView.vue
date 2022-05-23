<template>
  <div>
    <!-- 로고 사진 -->
    <img src="@/assets/cover.png" width="100%" />
    <br />
    <br />
    <div class="container">
      <div class="d-flex input-group mb-2">
        <b-form-input
          size="sm"
          class="mr-md-2"
          placeholder="Search"
          type="text"
          v-model.lazy="keyword"
          @keyup.enter="videosearch"
        ></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" @click="videosearch"
          >Search</b-button
        >
      </div>
      <div>
        <div v-if="this.keyword.length > 0">
          <button
            type="button"
            class="btn btn-secondary margin3"
            style="width: 150px; height: 50px"
          >
            검색결과🔍
          </button>

          <div class="d-flex justify-content-around flex-wrap">
            <div v-for="video in videos" :key="video.videoId">
              <div class="iframestyle" style="margin: 1%">
                <iframe
                  width="550"
                  height="300"
                  :src="`https://www.youtube.com/embed/${video.videoId}`"
                ></iframe>
                <div class="videotitle">
                  <b-link :to="`/video/${video.videoId}`">{{
                    video.videoTitle
                  }}</b-link>
                  <div class="d-flex justify-content-between">
                    <div>{{ video.videoChannel }}</div>
                    <div>조회수 : {{ video.videoViewCnt }}</div>
                  </div>
                </div>
              </div>
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
      <div class="d-flex justify-content-around flex-wrap">
        <div v-for="video in videos3" :key="video.videoId">
          <div class="iframestyle" style="margin: 1%">
            <iframe
              width="550"
              height="300"
              :src="`https://www.youtube.com/embed/${video.videoId}`"
            ></iframe>
            <div class="videotitle">
              <b-link :to="`/video/${video.videoId}`">{{
                video.videoTitle
              }}</b-link>
              <div class="d-flex justify-content-between">
                <div>{{ video.videoChannel }}</div>
                <div>조회수 : {{ video.videoViewCnt }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 부위별 영상 추천 -->
      <div>
        <button
          type="button"
          class="btn btn-secondary margin3"
          style="width: 150px; height: 50px"
        >
          부위별 영상🦾🦿
        </button>
        <div class="form-check marginb3">
          <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              class="pt-2 text-align-left"
              :options="['상체', '하체', '전신', '복부']"
              :aria-describedby="ariaDescribedby"
              v-model="part"
            ></b-form-radio-group>
          </b-form-group>
        </div>
        <div class="d-flex justify-content-around flex-wrap">
          <div v-for="video in videos" :key="video.videoId">
            <div v-if="video.videoPart === part">
              <div class="iframestyle" style="margin: 1%">
                <iframe
                  width="550"
                  height="300"
                  :src="`https://www.youtube.com/embed/${video.videoId}`"
                ></iframe>
                <div class="videotitle">
                  <b-link :to="`/video/${video.videoId}`">{{
                    video.videoTitle
                  }}</b-link>
                  <div class="d-flex justify-content-between">
                    <div>{{ video.videoChannel }}</div>
                    <div>조회수 : {{ video.videoViewCnt }}</div>
                  </div>
                </div>
              </div>
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
</style>
