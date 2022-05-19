<template>
  <div>
  <h2>게시글 수정</h2>
    <fieldset>
      <legend>수정이지롱</legend>
      <label for="title">제목</label>
      <input type="text" id="title" v-model="review.reviewTitle" /> <br />
      <label for="writer">글쓴이</label>
      <input type="text" id="writer" v-model="review.reviewWriter" /> <br />
      <label for="content">글내용</label>
      <textarea v-model="review.reviewContent" cols="30" rows="10"></textarea>
      <button @click="updateReview">수정</button>
    </fieldset>
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
      id: this.review.id,
      title: this.review.title,
      writer: this.review.writer,
      content: this.review.content
    }
    this.$store.dispatch('updateReview', updateReview)
  }
}
}
</script>

<style>

</style>