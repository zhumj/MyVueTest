<script lang="ts">
import { Vue } from "vue-class-component";
export default class HomeView extends Vue {
  mMsg = "";
  created() {
    this.mMsg = this.$route.query.msg;
  }

  change() {
    this.mMsg += "1";
  }
}
</script>

<template>
  <div class="about">
    <h1>{{ $t("which_page", { msg: mMsg }) }}</h1>
    <button v-on:click="change">点我修改值</button>
  </div>
</template>
