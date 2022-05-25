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
          alert("회원가입이 완료되었습니다.");
          router.push(`/login`);
        })
        .catch(() => {
          alert("동일한 아이디가 존재합니다.");
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
          //token 받아온걸 sessionStorage에 저장
          sessionStorage.setItem("access-token", res.data["access-token"]);
          sessionStorage.setItem("userId", user.userId);
          //로그인이 되면 홈으로 튕긴다.
          router.push({ name: "home" });
        })
        .catch(() => {
          alert("아이디 혹은 비밀번호가 틀립니다.");
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
    //유저 찜 얻어오기
    getZzim({ commit }) {
      console.log("찜 가져와~");
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
    //찜 목록 추가
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
          console.log("찜 완료");
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
          console.log("찜 삭제완료");
          context.dispatch("getZzim");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //유저검색
    searchUsers({ commit }, payload) {
      const API_URL = `${REST_API}/user`;
      axios({
        url: API_URL,
        method: "GET",
        params: {
          keyword: payload.keyword,
        },
      })
        .then((res) => {
          commit("SEARCH_USERS", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addFollower(context, param) {
      context
      const API_URL = `${REST_API}/follower`;
      axios({
        url: API_URL,
        method: "POST",
        params: param
      })
        .then(() => {
          console.log("팔로워 추가 완료");
          context.dispatch("getFollowers", sessionStorage.getItem('userId'));
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getFollowers({commit}, id) {
      const API_URL = `${REST_API}/follower/${id}`;
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          console.log("팔로워 가져와");
          commit("GET_FOLLOWER", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
