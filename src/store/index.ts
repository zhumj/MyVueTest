import { defineStore } from "pinia";

export const appStore = defineStore({
  id: "App", // 必须指明唯一的pinia仓库的id
  state: () => ({
    lang: "",
  }),
  actions: {
    setLang(lang: string) {
      this.lang = lang;
    },
  },
  getters: {
    getLang(state) {
      return state.lang;
    },
  },
});

export const userStore = defineStore({
  id: "User", // 必须指明唯一的pinia仓库的id
  state: () => ({
    name: "zhumj",
    age: 18,
  }),
  actions: {
    setName(name: string) {
      this.name = name;
    },
  },
  getters: {
    getName(state) {
      return state.name;
    },
  },
  // 全部持久化
  // persist: true,
  // 配置可选持久化
  persist: {
    // 修改存储中使用的键名称，默认为当前 Store的 id
    key: "userInfo",
    // 修改为 window.sessionStorage，必须有getItem和setItem方法（默认为localStorage）
    storage: window.sessionStorage,
    // 用于部分持久化
    paths: [],
    // 在从本地存储恢复状态之前执行挂钩
    beforeRestore: (_context) => {
      console.log("Before hydration...");
    },
    // 从本地存储恢复状态后执行的挂钩
    afterRestore: (_context) => {
      console.log("After hydration...");
    },
  },
});
