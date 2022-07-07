<script lang="ts">
import { Vue } from "vue-class-component";
import { LocationQueryValue } from "vue-router";

export default class AboutView extends Vue {
  mMsg: LocationQueryValue | LocationQueryValue[] = "";

  srcList = [
    "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg1.jpeg",
    "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
    "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
    "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
    "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
    "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
  ];

  created() {
    this.mMsg = this.$route.query.msg;
  }

  change() {
    this.mMsg += "1";
  }
}
</script>

<template>
  <div class="about">
    <i-twemoji-flag-china class="aboutIcon" />
    <h1>{{ $t("which_page", { msg: $route.query.msg }) }}</h1>
    <el-button style="cursor: pointer" v-on:click="change">
      修改父组件传过来的值
    </el-button>
    <p>{{ "父组件传过来的值：" + mMsg }}</p>
    <!-- 
      hide-on-click-modal：当开启 preview 功能时，是否可以通过点击遮罩层关闭
      preview-src-list：预览图列表
      initial-index：初始预览图像索引
      lazy：懒加载
     -->
    <el-image
      v-for="(url, index) in srcList"
      :key="url"
      style="
        width: 100px;
        height: 100px;
        margin: 10px;
        background-color: antiquewhite;
      "
      :src="url"
      :preview-src-list="srcList"
      :initial-index="index"
      :hide-on-click-modal="true"
      fit="cover"
      lazy
    >
      <!-- 占位图 -->
      <template #placeholder>
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100px;
            height: 100px;
          "
        >
          Loading...
        </div>
      </template>
      <!-- 加载错误回显 -->
      <template #error>
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100px;
            height: 100px;
          "
        >
          <i-twemoji-flag-china />
        </div>
      </template>
    </el-image>
  </div>
</template>

<style lang="scss">
.aboutIcon {
  font-size: 10em;
}
</style>
