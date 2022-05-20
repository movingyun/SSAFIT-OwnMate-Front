<template>
  <div class="container">
  <h2>게시글 수정</h2>
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