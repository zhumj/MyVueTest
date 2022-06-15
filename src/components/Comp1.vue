<script lang="ts">
import { Vue } from "vue-class-component";
import emitter from "@/eventbus/index";

export default class Comp1 extends Vue {
  fromComp2Msg = "";

  created() {
    // 接收组件2的数据
    emitter.on("toComp1", (msg: string) => {
      console.log("Comp1 EventBus come in", msg);
      this.fromComp2Msg += msg;
    });
  }

  // 向组件2宣示地位
  toComp2() {
    emitter.emit("toComp2", "Comp2兄弟，我是你大哥");
  }
}
</script>

<template>
  <div class="comp1">
    <p>------------------------- 组件1 -------------------------</p>
    <p>我是组件1，组件2是我兄弟，我是大哥</p>
    <p>{{ "组件2说：" + fromComp2Msg }}</p>
    <button v-on:click="toComp2">向组件2宣称我是大哥的地位</button>
  </div>
</template>
