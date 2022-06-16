<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  emits: ["emitCallback"],
  props: {
    msg: String,
    funCallback: {
      type: Function,
      required: true,
    },
  },
})
export default class Children extends Vue {
  // 父组件传递过来的数据
  msg!: string;

  // 函数式向父组件传递数据
  funCallback!: (result: string) => void;
  funToFather(result: string) {
    this.funCallback(result);
  }
  // emit式向父组件传递数据
  emitToFather(result: string) {
    this.$emit("emitCallback", result);
  }
}
</script>

<template>
  <div class="children">
    <p>------------------------- 我是子组件 -------------------------</p>
    <p>{{ msg }}</p>
    <el-button
      class="button"
      v-on:click="funToFather('我是子组件通过函数方式传递的值')"
    >
      函数式向父组件传值
    </el-button>
    <el-button
      class="button"
      v-on:click="emitToFather('我是子组件通过Emit方式传递的值')"
    >
      Emit式向父组件传值
    </el-button>
  </div>
</template>

<style scoped lang="scss">
button {
  margin: 0 10px 0 10px;
}
</style>
