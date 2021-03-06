import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";

Vue.use(Vuex);

const REST_API = `http://localhost:9999/api`;
const REST_API_REVIEW = `http://localhost:9999/api/review`;

export default new Vuex.Store({
  state: {
    videos: [],
    video: {},
    zzims: {},
    reviews: [],
    review: {},
    videos3: [],
    allVideos: [],
    isLogin: false,
    user: {},
    likeReview: [],
    dislikeReview: [],
    users: [],
    followers: [],
    allUsers:[],
  },
  getters: {},
  mutations: {
    GET_REVIEWS(state, payload) {
      state.reviews = payload;
    },
    GET_REVIEW(state, payload) {
      state.review = payload;
    },
    CREATE_REVIEW(state, payload) {
      state.reviews.push(payload);
    },
    UPDATE_REVIEW(state, payload) {
      state.review = payload;
    },
    GET_VIDEOS(state, payload) {
      state.videos = payload;
    },
    GET_ALLVIDEOS(state, payload) {
      state.allVideos = payload;
    },
    GET_VIDEO(state, payload) {
      state.video = payload;
    },
    GET_VIDEOS3(state, payload) {
      state.videos3 = payload;
    },
    USER_LOGIN(state) {
      state.isLogin = true;
    },
    UPDATE_USER(state, payload) {
      state.user = payload;
    },
    GET_USER(state, payload) {
      state.user = payload;
    },
    USER_LOGOUT(state) {
      state.isLogin = false;
    },
    COUNT_LIKE(state, payload) {
      state.review.reviewLikeCnt += 1;
      state.likeReview.push(payload);
    },
    COUNT_DISLIKE(state, payload) {
      state.review.reviewDislikeCnt += 1;
      state.dislikeReview.push(payload);
    },
    GET_ZZIM(state, payload) {
      state.zzims = payload;
    },
    SEARCH_USERS(state, payload) {
      state.users = payload;
    },
    GET_FOLLOWER(state, payload) {
      state.followers = payload;
    },
    SEARCH_ALLUSERS(state, payload){
      state.allUsers = payload;
    },
    ADD_FOLLOWER(state, payload) {
      state.followers.push(payload);
    },
  },
  actions: {
    getReviews({ commit }, payload) {
      const API_URL = `${REST_API_REVIEW}?reviewVideoId=${payload.reviewVideoId}`;
      axios({
        url: API_URL,
        method: "GET",
        params: {
          mode: payload.mode,
          keyword: payload.keyword,
        },
      })
        .then((res) => {
          commit("GET_REVIEWS", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getReview({ commit }, reviewNo) {
      const API_URL = `${REST_API_REVIEW}/${reviewNo}`;
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          commit("GET_REVIEW", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createReview({ commit }, review) {
      const API_URL = `${REST_API}/review`;
      axios({
        url: API_URL,
        method: "POST",
        params: review,
      })
        .then(() => {
          commit("CREATE_REVIEW", review);
          router.push(`/video/${review.reviewVideoId}`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateReview({ commit }, review) {
      const API_URL = `${REST_API}/review`;
      axios({
        url: API_URL,
        method: "PUT",
        params: review,
      })
        .then(() => {
          commit("UPDATE_REVIEW", review);
          router.push(`/review/${review.reviewNo}`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteReview(context, review) {
      context;
      const API_URL = `${REST_API}/review/${review.reviewNo}`;
      axios({
        url: API_URL,
        method: "DELETE",
      })
        .then(() => {
          router.push(`/video/${review.reviewVideoId}`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getVideos({ commit }, payload) {
      let params = null;
      if (payload) {
        params = payload;
      }
      const API_URL = `${REST_API}/video`;
      axios({
        url: API_URL,
        method: "GET",
        params,
      })
        .then((res) => {
          commit("GET_VIDEOS", res.data);
          if (this.state.allVideos.length === 0) {
            commit("GET_ALLVIDEOS", res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getVideo({ commit }, videoId) {
      const API_URL = `${REST_API}/video/${videoId}`;
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          commit("GET_VIDEO", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getVideos3({ commit }) {
      const API_URL = `${REST_API}/video3`;
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          commit("GET_VIDEOS3", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    userJoin(context, user) {
      context;
      const API_URL = `${REST_API}/join`;
      axios({
        url: API_URL,
        method: "POST",
        params: user,
      })
        .then(() => {
          alert("??????????????? ?????????????????????.");
          router.push(`/login`);
        })
        .catch(() => {
          alert("????????? ???????????? ???????????????.");
        });
    },
    userLogin({ commit }, user) {
      const API_URL = `${REST_API}/login`;
      axios({
        url: API_URL,
        method: "POST",
        params: user,
      })
        .then((res) => {
          commit("USER_LOGIN", user);
          //token ???????????? sessionStorage??? ??????
          sessionStorage.setItem("access-token", res.data["access-token"]);
          sessionStorage.setItem("userId", user.userId);
          //???????????? ?????? ????????? ?????????.
          router.push({ name: "home" });
        })
        .catch(() => {
          alert("????????? ?????? ??????????????? ????????????.");
        });
    },
    updateUser({ commit }, user) {
      const API_URL = `${REST_API}/user`;
      axios({
        url: API_URL,
        method: "PUT",
        params: user,
      })
        .then(() => {
          commit("UPDATE_USER", user);
          router.push(`/`);
        })
        .catch((err) => {
          console.log(err);
          router.push(`/user/${user.userId}`);
        });
    },
    getUser({ commit }, user) {
      const API_URL = `${REST_API}/user/${user.userId}`;
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          commit("GET_USER", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    userLogout({ commit }) {
      commit("USER_LOGOUT");
    },
    countLike({ commit }, reviewNo) {
      if (!this.state.likeReview.includes(reviewNo)) {
        const API_URL = `${REST_API}/review/like/${reviewNo}`;
        axios({
          url: API_URL,
          method: "GET",
        })
          .then(() => {
            commit("COUNT_LIKE", reviewNo);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    countDislike({ commit }, reviewNo) {
      if (!this.state.dislikeReview.includes(reviewNo)) {
        const API_URL = `${REST_API}/review/dislike/${reviewNo}`;
        axios({
          url: API_URL,
          method: "GET",
        })
          .then(() => {
            commit("COUNT_DISLIKE", reviewNo);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    //?????? ??? ????????????
    getZzim({ commit }) {
      console.log("??? ?????????~");
      const USER_ID = sessionStorage.getItem("userId");
      const API_URL = `${REST_API}/zzim/${USER_ID}`;
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          console.log(res.data);
          commit("GET_ZZIM", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //??? ?????? ??????
    addZzim(context, zzim) {
      context;
      const API_URL = `${REST_API}/zzim`;
      axios({
        url: API_URL,
        method: "POST",
        params: zzim,
      })
        .then(() => {
          console.log(zzim);
          console.log("??? ??????");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteZzim(context, zzimNo) {
      context;
      const API_URL = `${REST_API}/zzim/${zzimNo}`;
      axios({
        url: API_URL,
        method: "DELETE",
      })
        .then(() => {
          console.log("??? ????????????");
          context.dispatch("getZzim");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //????????????
    searchUsers({ commit }, payload) {
      let params = null;
      if (payload) {
        params = payload;
      }
      const API_URL = `${REST_API}/user`;
      console.log(payload)
      console.log(params)
      axios({
        url: API_URL,
        method: "GET",
        params,
      })
        .then((res) => {
          console.log(res)
          commit("SEARCH_USERS", res.data);
          if (this.state.allUsers.length === 0) {
            commit("SEARCH_ALLUSERS", res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addFollower({commit}, param) {
      const API_URL = `${REST_API}/follower`;
      console.log(param)
      axios({
        url: API_URL,
        method: "POST",
        params: param
      })
        .then(() => {
          commit("ADD_FOLLOWER", param);
          console.log("????????? ?????? ??????");
          console.log(param)
        })
        .catch((err) => {
          err
          alert("?????? ???????????? ???????????????")
        });
    },
    getFollowers({commit}, id) {
      const API_URL = `${REST_API}/follower/${id}`;
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          console.log("????????? ?????????");
          console.log(res.data)
          commit("GET_FOLLOWER", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteFollower(context, followerNo) {
      const API_URL = `${REST_API}/follower/${followerNo}`;
      axios({
        url: API_URL,
        method: "DELETE",
      })
        .then(() => {
          context.dispatch("getFollowers",sessionStorage.getItem('userId'))
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
