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
        유저 검색 🔍
      </button>
      <br />
      <br />
      <div class="d-flex input-group mb-2">
        <b-form-input
          size="sm"
          class="mr-md-2"
          placeholder="검색어를 입력해주세요."
          type="text"
          v-model.lazy="keyword"
          @keyup.enter="searchUsers"
        ></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" @click="searchUsers"
          >Search</b-button
        >
      </div>
      <div v-if="this.users.length != this.allUsers.length">
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
              <b-td>{{ user.userExerciseCareer }}</b-td>
              <b-td>{{ user.userGender }}</b-td>
              <b-td
                ><b-button
                  :name="user.userId"
                  variant="outline-primary"
                  @click="addFollower"
                  >Follow</b-button
                ></b-td
              >
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>

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
      <div class="videotext d-flex justify-content-between flex-wrap">
        <div v-for="follower in followers" :key="follower.followerNo">
          <div v-for="user in allUsers" :key="user.userId">
            <div v-if="follower.followerTargetId === user.userId">
              <!-- 카드 -->
              <div class="card h-200" style="width: 310px">
                <div class="card-body">
                  <h5 class="videotitle">
                    {{ user.userName }}
                  </h5>

                  <div>
                    <div>ID : {{ user.userId }}</div>
                    <div>AGE : {{ user.userAge }}</div>
                    <div>Exercise Career : {{ user.userExerciseCareer }}</div>
                    <div>Gender : {{ user.userGender }}</div>
                  </div>
                  <div>
                    <span>
                      <b-button
                        :num="follower.followerNo"
                        variant="outline-danger"
                        @click="deleteFollower"
                        >Unfollow</b-button
                      >
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FollowList",
  computed: {
    ...mapState(["users"]),
    ...mapState(["allUsers"]),
    ...mapState(["followers"]),
  },
  created() {
    this.$store.dispatch("searchUsers");
    let userId = sessionStorage.getItem("userId");
    this.$store.dispatch("getFollowers", userId);
  },
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    searchUsers() {
      const payload = {
        keyword: this.keyword,
      };
      this.$store.dispatch("searchUsers", payload);
    },
    addFollower() {
      alert("팔로우 목록에 추가되었습니다.");
      let param = {
        followerNo: 0,
        followerUserId: sessionStorage.getItem("userId"),
        followerTargetId: event.target.getAttribute("name"),
      };
      this.$store.dispatch("addFollower", param);
    },
    deleteFollower() {
      alert("삭제되었습니다.");
      let idx = event.target.getAttribute("num");
      this.$store.dispatch("deleteFollower", idx);
    },
  },
};
</script>

<style scoped>
.left-padding {
  padding-left: 45px;
}
.videotitle {
  font-size: 15px;
}
.videotext {
  font-size: 13px;
  padding: 0px;
}
.text-align-center {
  text-align: center;
}
.margin3 {
  margin: 3%;
}
.marginb3 {
  margin-bottom: 3%;
  margin-left: 3%;
  margin-right: 3%;
}
</style>
