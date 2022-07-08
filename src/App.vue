<template>
  <el-config-provider size="large" :z-index="3000" :locale="mLocaleElLang">
  </el-config-provider>
  <div class="app" :class="{ grey_mode: isGrayscaleOpen }">
    <el-button v-on:click="openGrayscale" style="margin: 10px"
      >全站置灰</el-button
    >
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";
import { appStore } from "./store";

export default class AppView extends Vue {
  mAppStore = appStore();

  mLocaleElLang = zhCn;
  isGrayscaleOpen = false;

  created() {
    this.mAppStore.setLang(this.$i18n.locale);
    if (this.$i18n.locale == "zh") {
      this.mLocaleElLang = zhCn;
    } else {
      this.mLocaleElLang = en;
    }
  }

  openGrayscale() {
    this.isGrayscaleOpen = !this.isGrayscaleOpen;
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.grey_mode {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
}
</style>
