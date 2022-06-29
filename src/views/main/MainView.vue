<template>
  <el-config-provider size="large" :z-index="3000" :locale="getElementPlusLang">
  </el-config-provider>
  <nav>
    <router-link to="/main/home">Home</router-link>
    <el-divider direction="vertical" />
    <router-link :to="{ name: 'about', query: { msg: 'About' } }"
      >About</router-link
    >
    <el-divider direction="vertical" />
    <router-link :to="{ name: 'father', params: { msg: 'Father' } }"
      >Father</router-link
    >
    <el-divider direction="vertical" />
    <el-button v-on:click="changeStoreLang">{{
      mAppStore.$state.lang
    }}</el-button>
    <el-divider direction="vertical" />
    <el-button v-on:click="changeStoreName">{{
      mUserStore.getName + " " + mUserStore.$state.age
    }}</el-button>
    <el-button v-on:click="goLogin">Go Login</el-button>
    <el-date-picker type="date" placeholder="Pick a day" />
  </nav>
  <router-view />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";
import { appStore, userStore } from "@/store";

export default class AppView extends Vue {
  mAppStore = appStore();
  mUserStore = userStore();

  created() {
    this.mAppStore.setLang(this.$i18n.locale);
  }

  goLogin() {
    this.$router.push({ path: "/login" });
  }

  getElementPlusLang() {
    if (this.$i18n.locale == "zh") {
      return zhCn;
    } else {
      return en;
    }
  }

  changeStoreLang() {
    if (this.mAppStore.getLang == "zh") {
      this.mAppStore.setLang("en");
    } else {
      this.mAppStore.setLang("zh");
    }
    sessionStorage.setItem("lang", this.mAppStore.getLang);
    location.reload();
  }

  changeStoreName() {
    // this.mUserStore.$patch({
    //   name: "晓雯",
    //   age: 3,
    // });
    this.mUserStore.$patch((state) => {
      state.name = "晓雯";
      state.age++;
    });
  }
}
</script>

<style lang="scss">
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
