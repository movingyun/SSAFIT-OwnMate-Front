import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

const REST_API = `http://localhost:9999/api`
const REST_API_REVIEW = `http://localhost:9999/api/review`

export default new Vuex.Store({
  state: {
    videos:[],
    video:{},
    reviews: [],
    review: {},
  },
  getters: {  

  },
  mutations: {
    GET_REVIEWS(state, payload) {
      state.reviews = payload
    },
    GET_REVIEW(state, payload) {
      state.review = payload 
    },
    CREATE_REVIEW(state, payload) {
      state.reviews.push(payload)
    },
    UPDATE_REVIEW(state, payload) {
      state.review = payload
    },
    GET_VIDEOS(state, payload){
      state.videos = payload
    },
    GET_VIDEO(state, payload){
      state.video = payload
    },

  },
  actions: {
    getReviews({ commit },payload) {
      const API_URL = `${REST_API_REVIEW}?reviewVideoId=${payload.reviewVideoId}`
      axios({
        url: API_URL,
        method: 'GET',
        params : {
          mode : payload.mode,
          keyword : payload.keyword
        }
      }).then((res) => {
        commit('GET_REVIEWS', res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    getReview({ commit }, reviewNo) {
      console.log(reviewNo)
      const API_URL = `${REST_API_REVIEW}/${reviewNo}`
      axios({
        url: API_URL,
        method: 'GET',
      }).then(res => {
        commit('GET_REVIEW', res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    createReview({ commit }, review) {
      const API_URL = `${REST_API}/review`
      axios({
        url: API_URL,
        method: 'POST',
        params: review
      }).then(() => {
        commit('CREATE_REVIEW', review)
        router.push(`/video/${review.reviewVideoId}`)
      }).catch((err) => {
        console.log(err)
      })
    },
    updateReview({ commit }, review) {
      const API_URL = `${REST_API}/review`
      axios({
        url: API_URL,
        method: 'PUT',
        params: review
      }).then(() => {
        commit('UPDATE_REVIEW', review)
        router.push(`/review/${review.reviewNo}`)
      }).catch((err) => {
        console.log(err)
      })
    },
    deleteReview(context, review) {
      context
      const API_URL = `${REST_API}/review/${review.reviewNo}`
      axios({
        url: API_URL,
        method: 'DELETE',
      }).then(() => {
        router.push(`/video/${review.reviewVideoId}`)
      }).catch((err) => {
        console.log(err)
      })
    },
    getVideos({commit}, payload){
      let params = null
      if(payload){
        params = payload
      }
      const API_URL = `${REST_API}/video`
      axios({
        url:API_URL,
        method:'GET',
        params
      }).then((res) => {
        console.log(res)
        commit('GET_VIDEOS', res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    getVideo({ commit }, videoId) {
      const API_URL = `${REST_API}/video/${videoId}`
      axios({
        url: API_URL,
        method: 'GET',
      }).then(res => {
        commit('GET_VIDEO', res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    userJoin(context, user) {
      context
      const API_URL = `${REST_API}/join`
      axios({
        url: API_URL,
        method: 'POST',
        params : user
      }).then(() => {
        router.push(`/login`)
      }).catch((err) => {
        console.log(err)
      })
    },
  },
  modules: {
  }
})
