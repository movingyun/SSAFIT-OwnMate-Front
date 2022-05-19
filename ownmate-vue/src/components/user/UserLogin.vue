<template>
  <div class="container">
    <div class="text-align-center">
      <div>
        <b-card bg-variant="light">
          <img class="text-align-center" src="@/assets/login.png" />
          <br>
          <br>
          <b-form-group
            label="OWN MATE 로그인"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
          <br>
            <b-form-group
              label="아이디:"
              label-for="nested-street"
              label-cols-sm="2"

            >
              <b-form-input id="nested-street"></b-form-input>
            </b-form-group>

            <b-form-group
              label="패스워드:"
              label-for="nested-city"
              label-cols-sm="2"

            >
              <b-form-input id="nested-city"></b-form-input>
            </b-form-group>

            <div class="text-align-center">
                <b-button :to="{name:'home'}">Login</b-button>
            </div>
           <a><h6 class="text-align-right" @click="moveJoin"> 아이디가 없으신가요? </h6></a>
          </b-form-group>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
      moveJoin() {
      this.$router.push({ name: "userJoin" });
    },
  }
};
</script>
<style scoped>
.text-align-center{
  text-align: center;
}
.text-align-right{
  text-align: right;
}
</style>
<style>
</style>