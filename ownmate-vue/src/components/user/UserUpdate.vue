<template>
  <div>
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
          <b-form-group label="아이디" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="user.data.userId"
              trim
              readonly
            ></b-form-input>
          </b-form-group>

          <b-form-group label="닉네임" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="user.data.userName"
              trim
            ></b-form-input>
          </b-form-group>

          <b-form-group label="주변헬스장" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="user.data.userGym"
              trim
            ></b-form-input>
          </b-form-group>

          <b-form-group label="운동경력" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="user.data.userExerciseCareer"
              trim
            ></b-form-input>
          </b-form-group>


          <b-form-group label="연령" label-for="input-5">
            <b-form-input
              id="input-5"
              v-model="user.data.userAge"
              trim
            ></b-form-input>
          </b-form-group>

          <b-form-radio-group
            class="pt-2 text-align-left"
            :options="['Male', 'Female']"
            :aria-describedby="ariaDescribedby"
            v-model="user.data.gender"
          ></b-form-radio-group>
        
          <div class="text-align-center">
            <b-button @click="updateUser">수정</b-button>
          </div>
        </b-form-group>
      </b-card>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    //user가져옴
computed: {
  ...mapState(['user'])
},
methods: {
  updateUser(){
    let updateUser = {
      userName: this.user.userName,
      userGym: this.user.userGym,
      userAge: this.user.userAge,
      userExerciseCareer: this.user.userExerciseCareer,
      userGender : this.user. userGender,
    }
    this.$store.dispatch('updateUser', updateUser)
  }
}
}
</script>

<style scoped>
.text-align-center {
  text-align: center;
}
.text-align-left {
  text-align: left;
}
</style>
