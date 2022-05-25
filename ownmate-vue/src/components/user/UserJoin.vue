<template>
  <div class="text-align-center container">
        <br>
    <br>
    <br>
    <b-card bg-variant="light">
      <img src="@/assets/login.png" />
      <br />
      <br />
      <b-form-group
        label="OWN MATE 회원가입"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0 text-align-center"
      >
        <br />
        <h5 class="text-align-center">회원정보를 입력해주세요.</h5>
        <br />
        <b-form-group
          label="아이디:"
          label-for="nested-country"
          label-cols-sm="2"
          label-align-sm="right"
        >
          <b-form-input type="text" id="id" v-model="user.id"></b-form-input>
        </b-form-group>
        <b-form-group
          label="패스워드:"
          label-for="nested-country"
          label-cols-sm="2"
          label-align-sm="right"
        >
          <b-form-input type="password" id="pw" v-model="user.pw"></b-form-input>
        </b-form-group>
        <b-form-group
          label="패스워드 확인:"
          label-for="nested-country"
          label-cols-sm="2"
          label-align-sm="right"
        >
          <b-form-input
            type="password"
            id="pwCheck"
            v-model="user.pwCheck"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="닉네임:"
          label-for="nested-country"
          label-cols-sm="2"
          label-align-sm="right"
        >
          <b-form-input
            type="text"
            id="name"
            v-model="user.name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="주변헬스장:"
          label-for="nested-country"
          label-cols-sm="2"
          label-align-sm="right"
        >
          <b-form-input type="text" id="gym" v-model="user.gym"></b-form-input>
        </b-form-group>

        <b-form-group
          label="운동경력:"
          label-for="nested-country"
          label-cols-sm="2"
          label-align-sm="right"
        >
          <b-form-input
            type="number"
            id="career"
            v-model="user.career"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="연령:"
          label-for="nested-country"
          label-cols-sm="2"
          label-align-sm="right"
        >
          <b-form-input type="number" id="age" v-model="user.age"></b-form-input>
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
          <b-button variant="outline-success" @click="join">회원가입</b-button>
        </div>
      </b-form-group>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: "",
        pw: "",
        pwCheck: "",
        name: "",
        gym: "",
        age: 0,
        career: 0,
        gender: "",
        file_name: "file_name",
        file_uri: "file_uri",
      },
    };
  },
  methods: {
    join() {
      let user = {
        userId: this.user.id,
        userPw: this.user.pw,
        userName: this.user.name,
        userGym: Number(this.user.gym),
        userAge: Number(this.user.age),
        userExerciseCareer: Number(this.user.career),
        userGender: this.user.gender,
        userFileName: this.user.file_name,
        userFileUri: this.user.file_uri
      };
      this.$store.dispatch("userJoin", user);
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
