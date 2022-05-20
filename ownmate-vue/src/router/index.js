import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ReviewView from "@/views/ReviewView.vue";
import VideoView from "@/views/VideoView.vue";

import ReviewList from "@/components/review/ReviewList";
import ReviewCreate from "@/components/review/ReviewCreate";
import ReviewUpdate from "@/components/review/ReviewUpdate";
import ReviewDetail from "@/components/review/ReviewDetail";

import UserLogin from "@/components/user/UserLogin";
import UserJoin from "@/components/user/UserJoin";
import UserMyPage from "@/components/user/UserMyPage";

import FollowList from "@/components/follower/FollowList"



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/review",
    component: ReviewView,
    children: [
      {
        path: ":videoId",
        name: "reviewList",
        component: ReviewList,
      },
      {
        path: "create",
        name: "reviewCreate",
        component: ReviewCreate,
      },
      {
        path: "update",
        name: "reviewUpdate",
        component: ReviewUpdate,
      },
      {
        path: ":id",
        name: "reviewDetail",
        component: ReviewDetail,
      },
    ],
  },
  {
    path:"/video/:videoId",
    name:"videoview",
    component:VideoView
  },
  {
    path: "/user",
    name: "userLogin",
    component: UserLogin,
  },
  {
    path: "/join",
    name: "userJoin",
    component: UserJoin,
  },
  {
    path: "/mypage",
    name: "userMyPage",
    component: UserMyPage,
  },
  {
    path: "/follow",
    name: "folloList",
    component: FollowList
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
