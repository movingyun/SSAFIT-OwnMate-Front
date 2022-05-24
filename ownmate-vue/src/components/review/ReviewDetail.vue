<template>
  <div class="container">
        <br>
    <br>
    <br>
    <h3>리뷰 상세보기</h3>
    <div class="m-4">
      <div class="d-flex justify-content-between">
        <div>
          조회수 :
          <b-badge variant="secondary">{{ review.reviewViewCnt }}</b-badge>
        </div>
        <div>
          <!-- 좋아요 싫어요 버튼 쓰기 아이콘에 클릭함수 넣어야함!-->
          <b-icon icon="hand-thumbs-up" aria-hidden="true"></b-icon
          ><b-badge variant="success">{{ review.reviewLikeCnt }}</b-badge>
          <b-icon icon="hand-thumbs-down" aria-hidden="true"></b-icon
          ><b-badge variant="danger">{{ review.reviewDislikeCnt }}</b-badge>
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
      <div class="d-flex justify-content-center">
        <span class="margin3"
          ><b-button variant="outline-primary" @click="moveUpdate"
            >수정</b-button
          ></span
        >
        <span class="margin3"
          ><b-button variant="outline-danger" @click="deleteReview"
            >삭제</b-button
          ></span
        >
      </div>
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
      if(userInput == this.review.reviewPw){
        this.$router.push({ name: "reviewUpdate" });
      }
      else{
        alert("비밀번호가 틀립니다.")
      }      
    },
    deleteReview() {
      var userInput = prompt("비밀번호를 입력해주세요" + "");
      if(userInput == this.review.reviewPw){
        alert("삭제되었습니다.")
        this.$store.dispatch("deleteReview", this.review);
      }
      else{
        alert("비밀번호가 틀립니다.")
      }
    },
  },
};
</script>

<style scoped>
.margin3 {
  margin: 5px;
}
</style>
;
