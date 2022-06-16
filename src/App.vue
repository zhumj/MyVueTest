<template>
  <el-config-provider size="large" :z-index="3000" :locale="getLocale()">
  </el-config-provider>
  <nav>
    <router-link to="/">Home</router-link>
    <el-divider direction="vertical" />
    <router-link :to="{ name: 'about', query: { msg: 'About' } }"
      >About</router-link
    >
    <el-divider direction="vertical" />
    <router-link :to="{ name: 'father', params: { msg: 'Father' } }"
      >Father</router-link
    >
    <el-button v-on:click="openMessage">获取语言</el-button>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";
import { ElMessage } from "element-plus";

export default class AppView extends Vue {
  openMessage() {
    const i18nLang = this.$i18n.locale;
    ElMessage("i18n语言 = " + i18nLang);
  }
  getLocale() {
    const i18nLang = this.$i18n.locale;
    console.log("i18n语言 = ", i18nLang);
    return i18nLang.indexOf("zh") ? zhCn : en;
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

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
