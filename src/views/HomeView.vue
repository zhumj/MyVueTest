<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  fatherFun = (n: number) => {
    console.log("父组件函数,接收到子组件的值为：", n);
  };
  emitCallback = (n: number) => {
    console.log("父组件函数,emit接收到子组件的值为：", n);
  };
}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld
      msg="Welcome to Your Vue.js + TypeScript App"
      :num="123"
      :isB="true"
      :funCallback="fatherFun"
      @emitCallback="emitCallback"
    />
  </div>
</template>
