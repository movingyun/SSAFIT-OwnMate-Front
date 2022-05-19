<template>
  <div class="text-align-center">
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
          <b-form-input type="text"></b-form-input>
        </b-form-group>
        <b-form-group
          label="패스워드:"
          label-for="nested-country"
          label-cols-sm="2"
          label-align-sm="right"
        >
          <b-form-input type="text"></b-form-input>
        </b-form-group>
        <b-form-group
          label="패스워드 확인:"
          label-for="nested-country"
          label-cols-sm="2"
          label-align-sm="right"
        >
          <b-form-input type="text"></b-form-input>
        </b-form-group>

        <b-form-group
          label="닉네임:"
          label-for="nested-country"
          label-cols-sm="2"
          label-align-sm="right"
        >
          <b-form-input type="text"></b-form-input>
        </b-form-group>

        <b-form-group
          label="주변헬스장:"
          label-for="nested-country"
          label-cols-sm="2"
          label-align-sm="right"
        >
          <b-form-input
            type="text"
            placeholder="**주소검색같은버튼으로 바꿔야함**"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="운동경력:"
          label-for="nested-country"
          label-cols-sm="2"
          label-align-sm="right"
        >
          <b-form-input type="text" placeholder="ex) 6(개월)"></b-form-input>
        </b-form-group>
        <b-form-group
          label="연령:"
          label-for="nested-country"
          label-cols-sm="2"
          label-align-sm="right"
        >
          <b-form-input type="text" placeholder="ex) 20(세)"></b-form-input>
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
          ></b-form-radio-group>
        </b-form-group>
        <div class="text-align-center">
          <b-button :to="{name:'userLogin'}">Join</b-button>
        </div>
      </b-form-group>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.text-align-center {
  text-align: center;
}
.text-align-left {
  text-align: left;
}
</style>