<template>
  <div class="text-align-center container">
    <br />
    <br />
    <br />
    <div class="text-align-center">
      <b-card bg-variant="light">
        <img src="@/assets/login.png" />
        <br />
        <br />
        <b-form-group
          label="OWN MATE 회원정보"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0 text-align-center"
        >
          <br />
          <br />

          <b-form-group
            label="아이디"
            label-for="input-1"
            label-cols-sm="2"
            label-align-sm="right"
          >
            <b-form-input
              id="input-1"
              v-model="user.data.userId"
              trim
              readonly
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="닉네임"
            label-for="input-2"
            label-cols-sm="2"
            label-align-sm="right"
          >
            <b-form-input
              id="input-2"
              v-model="user.data.userName"
              trim
              readonly
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="주변헬스장"
            label-for="input-3"
            label-cols-sm="2"
            label-align-sm="right"
          >
            <b-form-input
              id="input-3"
              v-model="user.data.userGym"
              trim
              readonly
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="운동경력"
            label-for="input-4"
            label-cols-sm="2"
            label-align-sm="right"
          >
            <b-form-input
              id="input-4"
              v-model="user.data.userExerciseCareer"
              trim
              readonly
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="연령"
            label-for="input-5"
            label-cols-sm="2"
            label-align-sm="right"
          >
            <b-form-input
              id="input-5"
              v-model="user.data.userAge"
              trim
              readonly
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="성별:"
            label-cols-sm="2"
            label-align-sm="right"
            class="mb-0"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-radio-group
              class="pt-2 text-align-left"
              :options="['Male', 'Female']"
              :aria-describedby="ariaDescribedby"
              v-model="user.gender"
            ></b-form-radio-group>
          </b-form-group>

          <div class="text-align-center">
            <b-button @click="moveUserUpdate">수정</b-button>
          </div>
        </b-form-group>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  //user정보를 store에서 가져옴
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    moveUserUpdate() {
      this.$router.push({ name: "userUpdate" });
    },
  },
};
</script>

<style scoped>
.text-align-center {
  text-align: center;
}
.text-align-left {
  text-align: left;
}
</style>
