<script lang="ts">
import { Vue } from "vue-class-component";
import emitter from "@/eventbus/index";

export default class Comp2 extends Vue {
  fromComp1Msg = "";

  created() {
    // 接收组件1的数据
    emitter.on("toComp2", (msg: string) => {
      console.log("Comp1 EventBus come in", msg);
      this.fromComp1Msg += msg;
    });
  }

  // 向组件1宣示地位
  toComp1() {
    emitter.emit("toComp1", "Comp1兄弟，我是你大哥");
  }
}
</script>

<template>
  <div class="comp1">
    <p>------------------------- 组件2 -------------------------</p>
    <p>我是组件2，组件1是我兄弟，我才是大哥</p>
    <p>{{ "组件1说：" + fromComp1Msg }}</p>
    <button v-on:click="toComp1">向组件1宣称我是大哥的地位</button>
  </div>
</template>
