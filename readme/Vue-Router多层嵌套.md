# Vue-Router多层嵌套

      - 登录
     -
平台 -         - 首页
     -       - 
      - 展示 - 用户管理
             - 
              - 设置

## src/App.vue
```
<template>
  <router-view />
</template>
```

## src/views/main/MainView.vue
```
<template>
  <nav>
    <router-link to="/main/home">Home</router-link> |
    <router-link to="/main/user">Uesr</router-link> |
    <router-link to="/main/settings">Settings</router-link>
  </nav>
  <router-view />
</template>
```

## src/views/login/LoginView.vue
```
<template>
  <div class="login">
    <h1>This is an Login page</h1>
    <button v-on:click="goMain">Go Main</button>
    // 或者
    <router-link to="/main">Go Main</router-link>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class LoginView extends Vue {
  goMain() {
    this.$router.push({ path: "/main" });
  }
}
</script>
```

## src/routes/index.ts
```
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // 根
  {
    path: "/",
    name: "index",
    redirect: "/login",// 路由重定向到登录界面
  },
  // 二级
  {
    path: "/main",
    name: "main",
    redirect: "/main/home",
    component: () => import("@/views/main/MainView.vue"),
    // 三级
    children: [
      {
        path: "home",
        name: "home",
        component: import("@/views/main/HomeView.vue"),
      },
      {
        path: "user",
        name: "user",
        component: () => import("@/views/main/UserView.vue"),
      },
      {
        path: "settings",
        name: "settings",
        component: () => import("@/views/main/SettingsView.vue"),
      },
    ],
  },
  // 二级
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```
