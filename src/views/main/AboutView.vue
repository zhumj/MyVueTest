<script lang="ts">
import { Vue } from "vue-class-component";
import { LocationQueryValue } from "vue-router";

export default class AboutView extends Vue {
  mMsg: LocationQueryValue | LocationQueryValue[] = "";

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
    <i-twemoji-flag-china class="aboutIcon" />
    <h1>{{ $t("which_page", { msg: $route.query.msg }) }}</h1>
    <el-button style="cursor: pointer" v-on:click="change">
      修改父组件传过来的值
    </el-button>
    <p>{{ "父组件传过来的值：" + mMsg }}</p>
  </div>
</template>

<style lang="scss">
.aboutIcon {
  font-size: 10em;
}
</style>
