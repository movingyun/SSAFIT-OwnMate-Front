<template>
   <div class="container">
    <h2>리뷰 등록</h2>
    <div class="m-4">
      <!-- <b-form-group label="videoId" label-for="input-1">
        <b-form-input id="input-1" v-model="video.videoId" readonly trim ></b-form-input>
      </b-form-group> -->
      <b-form-group label="reviewPw" label-for="input-1">
        <b-form-input id="input-1" v-model="reviewPw" trim></b-form-input>
      </b-form-group>
      <b-form-group label="제목" label-for="input-1">
        <b-form-input id="input-1" v-model="reviewTitle" trim></b-form-input>
      </b-form-group>
      <b-form-group label="글쓴이" label-for="input-2">
        <b-form-input id="input-2" v-model="reviewWriter" trim></b-form-input>
      </b-form-group>
      <b-form-group label="글내용" label-for="textarea">
        <b-form-textarea id="textarea" v-model="reviewContent"></b-form-textarea>
      </b-form-group>
      <b-button variant="outline-success" @click="createReview">등록</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewCreate",
  data() {
    return {
      reviewVideoId:"",
      reviewPw:"",
      reviewTitle: "",
      reviewWriter: "",
      reviewContent: ""
    };
  },
  methods: {
    createReview() {
      let newReview = {
        id: 0,
        reviewVideoId:this.video.videoId,
        reviewPw:this.reviewPw,
        reviewTitle: this.reviewTitle,
        reviewWriter: this.reviewWriter,
        reviewContent: this.reviewContent
      };

      this.$store.dispatch("createReview", newReview);
    }
  },
  computed: {
    video() {
      return this.$store.state.video;
    },
  },
};
</script>

<style>

</style>