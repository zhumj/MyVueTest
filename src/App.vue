<template>
  <el-config-provider size="large" :z-index="3000" :locale="getElementPlusLang">
  </el-config-provider>
  <router-view />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";
import { appStore } from "./store";

export default class AppView extends Vue {
  mAppStore = appStore();

  created() {
    this.mAppStore.setLang(this.$i18n.locale);
  }

  getElementPlusLang() {
    if (this.$i18n.locale == "zh") {
      return zhCn;
    } else {
      return en;
    }
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
</style>
