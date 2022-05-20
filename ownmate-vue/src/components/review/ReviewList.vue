<template>
  <div>
    <!-- 비디오 목록에서 비디오를 누르고 들어가면 리뷰목록으로 들어가게한다..? -->
    <!-- 리뷰 목록들을 관리할 게시판을 따로만든다? -->
    <div class="text-align-left">
    <h2>리뷰</h2>
    </div>
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
        <b-tr v-for="review in pageReviewList" :key="review.reviewNo">
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
    <div class="text-align-right">
    <b-button variant="outline-primary" :to="`/review/create`" class="text-align-right">등록</b-button>
    </div>
    <br>
    <div class="d-flex input-group mb-3 justify-content-center">
       <span id="inputGroup-sizing-sm" class="margin3 text-align-center"><b-form-select v-model="mode" :options="options">
       </b-form-select></span>
       <span class="margin3 text-align-center"><b-form-input type="text" v-model="keyword" @keyup.enter="search"></b-form-input></span>
      <span class="margin3 text-align-center"><button class="btn btn-outline-secondary" @click="search">검색</button></span>
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
      selected:null,
      options:[
        {value:null, text:'선택해주세요'},
        {value:'1', text:'제목'},
        {value:'2', text:'내용'},
        {value:'3', text:'제목+내용'},
      ]
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
    this.$store.dispatch('getReviews',{mode : 0, reviewVideoId: this.reviewVideoId})
  },
  methods: {
      search(){
      const payload = {
        reviewVideoId : this.reviewVideoId,
        mode: this.mode,
        keyword: this.keyword
      }
      this.$store.dispatch("getReviews", payload)
    },
  }
};
</script>

<style scoped>
.text-align-center {
  text-align: center;
}
.text-align-right{
  text-align: right;
}
.text-align-left{
  text-align: left;
  margin-left: 50px;
}
.margin3{
  margin: 3px;
}
</style>
