# 状态管理：Pinia 的使用

## 安装
```
yarn add pinia
```
*配置*
```main.ts
=> main.ts

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).mount("#app");
```
**如果使用的是 Vue CLI，可以用 [vue-cli-plugin-pinia](https://github.com/wobsoriano/vue-cli-plugin-pinia) 这个插件，可以不用自己配置。**
```
vue add vue-cli-plugin-pinia
```

## 创建 src/store/index.ts 文件
```src/store/index.ts
=> src/store/index.ts

import { defineStore } from "pinia";

export const userStore = defineStore({
  id: "User", // 必须指明唯一的pinia仓库的id
  state: () => ({
    userName: "小明",
    age: 18,
  }),
  actions: {
    setUserName(userName: string) {
      this.userName = userName;
    },
  },
  getters: {
    getUserName(state) {
      return state.userName;
    },
  },
});
```

## 使用
```
<template>
  <el-button v-on:click="changeUserName">{{ mUserStore.getUserName }}</el-button>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { userStore } from "@/store";

export default class AppView extends Vue {
  mUserStore = userStore();

  changeUserName() {
    this.mUserStore.setUserName("晓雯");
  }

  => 或者同时修改多个参数

  changeStoreData() {
    this.mUserStore.$patch({
      userName: "晓雯",
      age: 3,
    });
    => 或者如下写法
    this.mUserStore.$patch((state) => {
      state.userName = "晓雯";
      state.age++;
    });
  }
}
</script>
```
*$reset : 重置状态*
```
mUserStore.$reset();
```
*$dispose : 注销store*
```
mUserStore.$dispose();
```

## 订阅/监听

### $subscribe 对state的订阅监听
```
<script lang="ts">
import { Vue } from "vue-class-component";
import { userStore } from "./store";

export default class AppView extends Vue {
  mUserStore = userStore();

  created() {
    this.mUserStore.$subscribe(
      (mutation, state) => {
        /*
         * mutation主要包含三个属性值：
         *   events：当前state改变的具体数据，包括改变前的值和改变后的值等等数据
         *   storeId：是当前store的id
         *   type：用于记录这次数据变化是通过什么途径，主要有三个分别是
         *         “direct” ：通过 action 变化的
                   ”patch object“ ：通过 $patch 传递对象的方式改变的
                   “patch function” ：通过 $patch 传递函数的方式改变的
         */
        // 我们就可以在此处监听store中值的变化，当变化为某个值的时候，去做一些业务操作之类的
      },
      //detached:布尔值，默认是 false，正常情况下，当订阅所在的组件被卸载时，订阅将被停止删除，
      { detached: false }
    );
  }
}
</script>
```

### $onAction 对actions的订阅监听
```
<script lang="ts">
import { Vue } from "vue-class-component";
import { userStore } from "./store";

export default class AppView extends Vue {
  mUserStore = userStore();

  created() {
    this.mUserStore.$onAction(
      ({
        name, // name of the action
        store, // store instance, same as `someStore`
        args, // array of parameters passed to the action
        after, // hook after the action returns or resolves
        onError, // hook if the action throws or rejects
      }) => {
        const startTime = Date.now();
        // 这将在执行“store”的操作之前触发
        console.log(`Start "${name}" with params [${args.join(", ")}].`);

        // 如果动作成功并在完全运行之后，这将触发。
        after((result) => {
          console.log(
            `Finished "${name}" after ${
              Date.now() - startTime
            }ms.\nResult: ${result}.`
          );
        });

        // 如果动作抛出或返回拒绝的承诺，这将触发
        onError((error) => {
          console.warn(
            `Failed "${name}" after ${
              Date.now() - startTime
            }ms.\nError: ${error}.`
          );
        });
      },
      // 默认是 false，正常情况下，当订阅所在的组件被卸载时，订阅将被停止删除
      false
    );
  }
}
</script>
```

## 持久化

### 安装 Pinia 持久化插件: [pinia-plugin-persistedstate](https://www.npmjs.com/package/pinia-plugin-persistedstate)
```
yarn add pinia-plugin-persistedstate
```

### 配置持久化插件
```main.ts
=> main.ts

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).mount("#app");
```

### 模块开启持久化
```src/store/index.ts
=> src/store/index.ts

import { defineStore } from "pinia";

export const userStore = defineStore({
  id: "User", // 必须指明唯一的pinia仓库的id
  state: () => ({
    userName: "小明",
    age: 18,
  }),
  actions: {
    setUserName(userName: string) {
      this.userName = userName;
    },
  },
  getters: {
    getUserName(state) {
      return state.userName;
    },
  },
  // 开启持久化
  // persist: true, 
  // 或者如下配置持久化
  persist: {
    // 修改存储中使用的键名称，默认为当前 Store的 id
    key: "userInfo",
    // 修改为 sessionStorage，必须有getItem和setItem方法（默认为localStorage）
    storage: sessionStorage,
    // 用于部分持久化
    paths: ["userName"],
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
```
