import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    redirect: "/login",
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/MainView.vue"),
    redirect: "/main/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/main/HomeView.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import("@/views/main/AboutView.vue"),
      },
      {
        path: "father",
        name: "father",
        component: () => import("@/views/main/FatherView.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
