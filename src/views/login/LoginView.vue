<template>
  <div class="login">
    <i-twemoji-flag-china class="loginIcon" />
    <h1>This is an Login page</h1>
    <el-button v-on:click="goMain">Go Main</el-button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class AppView extends Vue {
  goMain() {
    this.$router.push({ path: "/main" });
  }
}
</script>

<style lang="scss">
.loginIcon {
  font-size: 10em;
}
</style>
