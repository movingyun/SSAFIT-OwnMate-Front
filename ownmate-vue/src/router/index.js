import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import VideoView from "@/views/VideoView.vue";

import ReviewList from "@/components/review/ReviewList";
import ReviewCreate from "@/components/review/ReviewCreate";
import ReviewUpdate from "@/components/review/ReviewUpdate";
import ReviewDetail from "@/components/review/ReviewDetail";

import VideoSearch from "@/components/video/VideoSearch";

import UserLogin from "@/components/user/UserLogin";
import UserJoin from "@/components/user/UserJoin";
import UserMyPage from "@/components/user/UserMyPage";
import UserUpdate from "@/components/user/UserUpdate";

import FollowList from "@/components/follower/FollowList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/review:videoId",
    name: "reviewList",
    component: ReviewList,
  },
  {
    path: "/review/create",
    name: "reviewCreate",
    component: ReviewCreate,
  },
  {
    path: "/review/update",
    name: "reviewUpdate",
    component: ReviewUpdate,
  },
  {
    path: "/review/:reviewNo",
    name: "reviewDetail",
    component: ReviewDetail,
  },

  {
    path: "/video/:videoId",
    name: "videoview",
    component: VideoView,
  },
  {
    path: "/video",
    name: "videoSearch",
    component: VideoSearch,
  },
  {
    path: "/login",
    name: "userLogin",
    component: UserLogin,
  },
  {
    path: "/join",
    name: "userJoin",
    component: UserJoin,
  },
  {
    path: "/user/:userId",
    name: "userMyPage",
    component: UserMyPage,
  },
  {
    path: "/user/update",
    name: "userUpdate",
    component: UserUpdate,
  },
  {
    path: "/follow",
    name: "folloList",
    component: FollowList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path == "/") {
    next();
  } else if (
    !sessionStorage.getItem("access-token") &&
    !to.path.includes("login") && !to.path.includes("join") && !to.path.includes("user")
  ) {
    alert("로그인을 완료해야 이용 가능한 기능입니다.");
    next("/login");
  } else {
    next();
  }
});

export default router;
