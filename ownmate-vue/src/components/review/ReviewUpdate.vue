<template>
  <div>
  <h2>게시글 수정</h2>

      <!-- <legend>수정이지롱</legend>
      <label for="title">제목</label>
      <input type="text" id="title" v-model="review.reviewTitle" /> <br />
      <label for="writer">글쓴이</label>
      <input type="text" id="writer" v-model="review.reviewWriter" /> <br />
      <label for="content">글내용</label>
      <textarea v-model="review.reviewContent" cols="30" rows="10"></textarea>
      <button @click="updateReview">수정</button> -->

      <b-form-group label="reviewPw" label-for="input-1">
        <b-form-input id="input-1" v-model="review.reviewPw" trim></b-form-input>
      </b-form-group>
      <b-form-group label="제목" label-for="input-1">
        <b-form-input id="input-1" v-model="review.reviewTitle" trim></b-form-input>
      </b-form-group>
      <b-form-group label="글쓴이" label-for="input-2">
        <b-form-input id="input-2" v-model="review.reviewWriter" trim readonly></b-form-input>
      </b-form-group>
      <b-form-group label="글내용" label-for="textarea">
        <b-form-textarea id="textarea" v-model="review.reviewContent"></b-form-textarea>
      </b-form-group>
      <b-button variant="outline-success" @click="updateReview">수정</b-button>
    </div>


</template>

<script>
import {mapState} from 'vuex'
export default {
name: "ReviewUpdate",
computed: {
  ...mapState(['review'])
},
methods: {
  updateReview(){
    let updateReview = {
      reviewNo: this.review.reviewNo,
      reviewTitle: this.review.reviewTitle,
      reviewWriter: this.review.reviewWriter,
      reviewContent: this.review.reviewContent
    }
    this.$store.dispatch('updateReview', updateReview)
  }
}
}
</script>

<style>

</style>