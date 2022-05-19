<template>
  <header>
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand :to="{name:'home'}">OwnMate</b-navbar-brand>
      <b-nav-form>
        <b-form-input
          size="sm"
          class="mr-sm-2"
          placeholder="Search"
        ></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
       <b-button size="sm" class="my-2 my-sm-0" href="#" id="loginbtn">
           <b-icon icon="person" variant="dark"></b-icon> login
           </b-button>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{name:'home'}">홈</b-nav-item>
          <b-nav-item href="#">탐색</b-nav-item>
          <b-nav-item href="#">팔로우 목록</b-nav-item>
          <b-nav-item href="#">찜한 영상</b-nav-item>
          <b-nav-item to="/review">리뷰 관리</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {};
</script>

<style>

</style>