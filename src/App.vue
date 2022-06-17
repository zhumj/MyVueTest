<template>
  <el-config-provider size="large" :z-index="3000" :locale="getElementPlusLang">
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
    <el-divider direction="vertical" />
    <el-button v-on:click="changeStoreLang">{{
      mAppStore.$state.lang
    }}</el-button>
    <el-button v-on:click="changeStoreName">{{
      mUserStore.getName + " " + mUserStore.$state.age
    }}</el-button>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";
import { appStore, userStore } from "./store";

// 使普通数据变响应式的函数
import { storeToRefs } from "pinia";

export default class AppView extends Vue {
  mAppStore = appStore();
  mUserStore = userStore();

  mName = "";
  mAge = 0;

  created() {
    const { name, age } = storeToRefs(userStore());
    this.mName = name.value;
    this.mAge = age.value;
    this.mAppStore.setLang(this.$i18n.locale);
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
