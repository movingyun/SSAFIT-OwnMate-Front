<template>
  <header>
    <b-navbar class='navbar fixed-top' toggleable type="dark" variant="dark">
      <b-navbar-brand :to="{ name: 'home' }">OWN MATE</b-navbar-brand>
      <div>
        <span v-if="!isLogin">
          <span class="margin3">
            <b-button size="sm" id="loginbtn" :to="{ name: 'userLogin' }">
              <b-icon icon="person" variant="dark"></b-icon> login
            </b-button>
          </span>
        </span>
        <span v-else>
          <span class="margin3">
            <b-button size="sm" id="loginbtn" @click="logout">
              <b-icon icon="person" variant="dark"></b-icon> logout
            </b-button>
          </span>
        </span>

        <span class="margin3">
          <b-navbar-toggle target="navbar-toggle-collapse">
            <template #default="{ expanded }">
              <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
              <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
          </b-navbar-toggle>
        </span>

        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item :to="{ name: 'home' }">홈</b-nav-item>
            <b-nav-item href="#">탐색</b-nav-item>
            <b-nav-item :to="`/follow`">팔로우 목록</b-nav-item>
            <b-nav-item :to="`/zzim`">찜한 영상</b-nav-item>
            <b-nav-item :to="`/user/${user.userId}`">내 정보 관리</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </header>
</template>

<script>
import {mapState} from 'vuex'

export default {
    //user가져옴
computed: {
  ...mapState(['user']),
    isLogin() {
      return this.$store.state.isLogin;
    },
},
  methods: {
    logout() {
      sessionStorage.clear();
      this.$store.dispatch("userLogout");
      alert("로그아웃 되었습니다.")
    },
  },
};
</script>

<style scoped>
.margin3 {
  margin: 3px;
}
</style>
