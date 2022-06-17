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
    <el-button v-on:click="changeStoreName">{{ mName + " " + mAge }}</el-button>
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

    this.mAppStore.$onAction(
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
        *
        * */
        // 我们就可以在此处监听store中值的变化，当变化为某个值的时候，去做一些业务操作之类的
        console.log(mutation);
        if (this.mName != state.name) {
          this.mName = state.name;
        }
        if (this.mAge != state.age) {
          this.mAge = state.age;
        }
      },
      //detached:布尔值，默认是 false，正常情况下，当订阅所在的组件被卸载时，订阅将被停止删除，
      { detached: false }
    );
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
