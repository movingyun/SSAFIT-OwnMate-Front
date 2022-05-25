<template>
  <div class="container">
    <br />
    <br />
    <br />
    <div>
      <button
        type="button"
        class="btn btn-secondary margin3"
        style="width: 150px; height: 50px"
      >
        유저 검색🔍
      </button>
      <br />
      <br />
      <div class="d-flex input-group mb-2">
        <b-form-input
          size="sm"
          class="mr-md-2"
          placeholder="아이디를 입력해주세요."
          type="text"
          v-model.lazy="keyword"
          @keyup.enter="usersearch"
        ></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" @click="usersearch"
          >Search</b-button
        >
      </div>
      <b-table-simple hover responsive class="text-center">
        <b-thead>
          <b-tr>
            <b-th>ID</b-th>
            <b-th>Name</b-th>
            <b-th>Age</b-th>
            <b-th>Exercise Career</b-th>
            <b-th>Gender</b-th>
            <b-th>Follow</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="user in users" :key="user.userId">
            <b-td>{{ user.userId }}</b-td>
            <b-td>{{ user.userName }}</b-td>
            <b-td>{{ user.userAge }}</b-td>
            <b-td>{{ user.userExerciseCareer}}</b-td>
            <b-td>{{ user.userGender }}</b-td>
            <b-td><b-button variant="outline-primary" @click="addFollow">Follow</b-button></b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>

      <br />
      <br />
      <button
        type="button"
        class="btn btn-secondary margin3"
        style="width: 150px; height: 50px"
      >
        내 팔로우목록
      </button>
      <br />
      <br />
      <b-table-simple hover responsive class="text-center">
        <b-thead>
          <b-tr>
            <b-th>ID</b-th>
            <b-th>Name</b-th>
            <b-th>Age</b-th>
            <b-th>Exercise Career</b-th>
            <b-th>Gender</b-th>
            <b-th>Unfollow</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
         <b-tr v-for="user in users" :key="user.userId">
            <b-td>{{ user.userId }}</b-td>
            <b-td>{{ user.userName }}</b-td>
            <b-td>{{ user.userAge }}</b-td>
            <b-td>{{ user.userExerciseCareer}}</b-td>
            <b-td>{{ user.userGender }}</b-td>
            <b-td><b-button variant="outline-danger" @click="deleteFollow">Unfollow</b-button></b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FollowList",
  computed: {
    ...mapState(["users"]),
  },
  created() {
     const payload = {
        keyword: this.keyword,
      };
      this.$store.dispatch("getUsers", payload);
  },
  data(){
    return{
      keyword:"",
    }
  },
  methods: {
    usersearch() {
      const payload = {
        keyword: this.keyword,
      };
      this.$store.dispatch("getUsers", payload);
    },
  },
};
</script>

<style>
</style>