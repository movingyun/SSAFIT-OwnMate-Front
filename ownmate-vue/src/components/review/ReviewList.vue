<template>
  <div>
    <!-- 비디오 목록에서 비디오를 누르고 들어가면 리뷰목록으로 들어가게한다..? -->
    <!-- 리뷰 목록들을 관리할 게시판을 따로만든다? -->
    <h2>리뷰</h2>
    {{ videoId }}
    <hr />
    <b-table-simple hover responsive class="text-center">
      <b-thead>
        <b-tr>
          <b-th>번호</b-th>
          <b-th>글쓴이</b-th>
          <b-th>제목</b-th>
          <b-th>조회수</b-th>
          <b-th>좋아요/싫어요</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="review in reviews" :key="review.reviewNo">
          <b-td>{{ review.reviewNo }}</b-td>
          <b-td>{{ review.reviewWriter }}</b-td>
          <b-td>
            <b-link :to="`/review/${review.reviewNo}`">{{
              review.reviewTitle
            }}</b-link></b-td
          >
          <b-td>{{ review.reviewViewCnt }}</b-td>
          <b-td
            >{{ review.reviewLikeCnt }} / {{ review.reviewDislikeCnt }}</b-td
          >
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <div class="text-align-center">
      <select v-model="mode">
        <option value="1">제목</option>
        <option value="2">내용</option>
        <option value="3">제목+내용</option>
      </select>
      <input type="text" v-model="keyword" />
      <button @click="search">검색</button>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "ReviewList",
  props: {
    videoId: String,
  },
  data(){
    return {
      keyword: "",
      mode: 1,
      currentPage: 1,
      perPage: 10,
      reviewVideoId : this.videoId,
    }
  },
  computed:{
      ...mapState([
        "reviews"
      ]),
    rows(){
      return this.reviews.length
    },
    pageReviewList(){
      return this.reviews.slice(
        (this.currentPage-1)*this.perPage, this.currentPage *this.perPage
      )
    }
  },
  created() {
    this.$store.dispatch('getReviews',this.reviewVideoId)
    console.log(this.reviewVideoId)
  },
  methods: {
        search(){
      const payload = {
        mode: this.mode,
        keyword: this.keyword
      }
      this.$store.dispatch("getReviews", payload)
    }
  }
};
</script>

<style scoped>
.text-align-center {
  text-align: center;
}
</style>
