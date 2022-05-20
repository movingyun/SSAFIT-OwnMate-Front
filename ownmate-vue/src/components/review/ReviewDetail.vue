<template>
  <div>
    <h3>리뷰 상세보기</h3>
    <div class="m-4">
      조회수 :
      <b-badge variant="danger">{{ review.reviewViewCnt }}</b-badge>

      <b-form-group label="제목" label-for="input-1">
        <b-form-input
          id="input-1"
          trim
          :value="review.reviewTitle"
          readonly
        ></b-form-input>
      </b-form-group>
      <b-form-group label="글쓴이" label-for="input-2">
        <b-form-input
          id="input-2"
          trim
          :value="review.reviewWriter"
          disabled
        ></b-form-input>
      </b-form-group>
      <b-form-group label="글내용" label-for="textarea">
        <b-form-textarea id="textarea" :value="review.reviewContent" readonly></b-form-textarea>
      </b-form-group>
      <b-badge variant="success">{{ review.reviewLikeCnt }}</b-badge>
      <b-badge variant="danger">{{ review.reviewDisLikeCnt }}</b-badge>
      <b-button variant="outline-primary" @click="moveUpdate">수정</b-button>
      <b-button variant="outline-danger" @click="deleteReview">삭제</b-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ReviewDetail",
  computed: {
    ...mapState(["review"]),
  },
  data(){
    return{
      reviewNo : null,
    };
  },
  created() {
    const pathName = new URL(document.location).pathname.split("/");
    const reviewNo = pathName[pathName.length - 1];
    this.reviewNo = reviewNo;
    console.log(reviewNo)
    this.$store.dispatch("getReview", reviewNo);
  },
  methods: {
    moveUpdate() {
      this.$router.push({ name: "reviewUpdate" });
    },
    deleteReview() {
      console.log(this.review.reveiwNo)
      this.$store.dispatch("deleteReview", this.review);
    },
  },
};
</script>

<style></style>;
