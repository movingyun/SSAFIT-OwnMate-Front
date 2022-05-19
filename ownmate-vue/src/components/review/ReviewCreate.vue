<template>
   <div class="container">
    <h2>리뷰 등록</h2>
    <div class="m-4">
      <b-form-group label="제목" label-for="input-1">
        <b-form-input id="input-1" v-model="title" trim></b-form-input>
      </b-form-group>
      <b-form-group label="글쓴이" label-for="input-2">
        <b-form-input id="input-2" v-model="writer" trim></b-form-input>
      </b-form-group>
      <b-form-group label="글내용" label-for="textarea">
        <b-form-textarea id="textarea" v-model="content"></b-form-textarea>
      </b-form-group>
      <b-button variant="outline-success" @click="createReview">등록</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewCreate",
  data() {
    return {
      title: "",
      writer: "",
      content: ""
    };
  },
  methods: {
    createReview() {
      let newReview = {
        id: 0,
        title: this.title,
        writer: this.writer,
        content: this.content
      };

      this.$store.dispatch("createReview", newReview);
    }
  }
};
</script>

<style>

</style>