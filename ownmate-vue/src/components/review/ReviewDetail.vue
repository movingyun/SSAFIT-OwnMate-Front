<template>
  <div class="container">
    <br />
    <br />
    <br />
    <h3>리뷰 상세보기</h3>
    <div class="m-4">
      <div class="d-flex justify-content-between">
        <div>
          조회수 :
          <b-badge variant="secondary">{{ review.reviewViewCnt }}</b-badge>
        </div>
        <div>
          <!-- 좋아요 싫어요 버튼 쓰기 아이콘에 클릭함수 넣어야함!-->

          <b-badge variant="success">좋아요 : {{ review.reviewLikeCnt }}</b-badge>
          <b-badge variant="danger">싫어요 : {{ review.reviewDislikeCnt }}</b-badge>
        </div>
      </div>
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
        <b-form-textarea
          id="textarea"
          :value="review.reviewContent"
          readonly
        ></b-form-textarea>
      </b-form-group>
      <div class="d-flex justify-content-end">
        이 글이 도움이 되었나요?
        <div class="btn-group btn-group-sm" role="group">
          <button type="button" class="btn btn-outline-secondary" @click="countLike">
            좋아요
          </button>
          <button type="button" class="btn btn-outline-secondary" @click="countDislike">
            싫어요
          </button>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <span class="margin3"
          ><b-button variant="outline-primary" @click="moveUpdate"
            >수정</b-button
          ></span
        >
        <span class="margin3"
          ><b-button variant="outline-primary" @click="deleteReview"
            >삭제</b-button
          ></span
        >
      </div>
        <div class="margin3 goList"
          ><b-button variant="outline-primary " @click="goBack"
            >&nbsp;&nbsp;&nbsp;&nbsp;목록으로&nbsp;&nbsp;&nbsp;&nbsp;</b-button
          ></div
        >
        
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
  data() {
    return {
      reviewNo: null,
    };
  },
  created() {
    const pathName = new URL(document.location).pathname.split("/");
    const reviewNo = pathName[pathName.length - 1];
    this.reviewNo = reviewNo;
    console.log(reviewNo);
    this.$store.dispatch("getReview", reviewNo);
  },
  methods: {
    moveUpdate() {
      var userInput = prompt("비밀번호를 입력해주세요" + "");
      if (userInput == this.review.reviewPw) {
        this.$router.push({ name: "reviewUpdate" });
      } else {
        alert("비밀번호가 틀립니다.");
      }
    },
    deleteReview() {
      var userInput = prompt("비밀번호를 입력해주세요" + "");
      if (userInput == this.review.reviewPw) {
        alert("삭제되었습니다.");
        this.$store.dispatch("deleteReview", this.review);
      } else {
        alert("비밀번호가 틀립니다.");
      }
    },
    countLike() {
      this.$store.dispatch("countLike", this.review.reviewNo);
    },
    countDislike() {
      this.$store.dispatch("countDislike", this.review.reviewNo);
    },
    goBack() {
      this.$router.push(`/video/${this.review.reviewVideoId}`);
    },
  },
};
</script>

<style scoped>
.margin3 {
  margin: 5px;
}
#likeBtn {
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}
.text-align-right {
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}.goList {
  text-align: center;
}
</style>
;
