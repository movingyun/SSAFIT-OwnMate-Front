<template>
  <div class="container">
    <div class="iframestyle" style="margin: 1%">
      <iframe
        width="1000"
        height="550"
        :src="`https://www.youtube.com/embed/${videoId}`"
      ></iframe>
    </div>
    <review-list :videoId='videoId'></review-list>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ReviewList from "@/components/review/ReviewList.vue";
export default {
  name: "VideoDetail",
  components: {
    ReviewList,
  },

  computed: {
    ...mapState(["video"]),
  },
  data() {
    return {
      videoId: null,
    };
  },
  created() {
    this.$store.dispatch("getVideo");
    const pathName = new URL(document.location).pathname.split("/");
    const videoId = pathName[pathName.length - 1];
    this.videoId = videoId;
    console.log(videoId);
  },
};
</script>

<style></style>
