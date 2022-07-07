<template>
  <div class="login">
    <div>
      <i-twemoji-flag-china class="loginIcon" />
      <h1>This is an Login page</h1>
      <el-date-picker
        v-model="selectedDate"
        type="date"
        placeholder="Pick a day"
        value-format="YYYY-MM-DD"
      />
      <p>{{ selectedDate }}</p>
      <el-button v-on:click="goMain">Go Main</el-button>
    </div>
    <p>用ul和li来做多行多列列表</p>
    <div v-loading="true" style="display: table; width: 100%">
      <ul
        v-for="data in dataList"
        :key="data"
        style="list-style: none; margin-top: 20px"
      >
        <li style="width: 25%; float: left">
          <el-card :body-style="{ padding: '0px' }" class="Container">
            <div class="Positive">
              <p style="background-color: burlywood">我是正面{{ data }}</p>
              <i-twemoji-flag-china class="loginIcon" />
            </div>
            <div class="Reverse">
              <p style="background-color: burlywood">我是反面{{ data }}</p>
              <i-twemoji-flag-china class="loginIcon" />
            </div>
          </el-card>
        </li>
      </ul>
    </div>
    <p>用el-row和el-col来做多行多列列表</p>
    <div>
      <el-row
        v-for="index in dataList.length % 4 === 0
          ? Math.floor(dataList.length / 4)
          : Math.floor(dataList.length / 4) + 1"
        :key="index"
        :gutter="0"
        style="width: auto"
      >
        <el-col
          v-for="i in dataList.length <= 4
            ? dataList.length
            : index * 4 <= dataList.length
            ? 4
            : dataList.length % 4"
          :key="i"
          :span="6"
        >
          <el-card :body-style="{ padding: '0px' }" class="Container">
            <div class="Positive">
              <p style="background-color: burlywood">
                我是正面{{ dataList[(index - 1) * 4 + i - 1] }}
              </p>
              <i-twemoji-flag-china class="loginIcon" />
            </div>
            <div class="Reverse">
              <p style="background-color: burlywood">
                我是反面{{ dataList[(index - 1) * 4 + i - 1] }}
              </p>
              <i-twemoji-flag-china class="loginIcon" />
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <p>用el-row和el-col自定义分栏数</p>
    <div>
      <el-row :gutter="0" style="width: auto; background-color: coral">
        <el-col
          v-for="index in 7"
          :key="index"
          :span="25"
          style="width: 14.28%"
        >
          <el-card :body-style="{ padding: '0px' }" class="Container">
            <div class="Positive">
              <p style="background-color: burlywood">我是正面{{ index - 1 }}</p>
              <i-twemoji-flag-china class="loginIcon" />
            </div>
            <div class="Reverse">
              <p style="background-color: burlywood">我是反面{{ index - 1 }}</p>
              <i-twemoji-flag-china class="loginIcon" />
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <p>直接用 display: flex 来做多行多列</p>
    <div
      v-for="index in dataList.length % 5 === 0
        ? Math.floor(dataList.length / 5)
        : Math.floor(dataList.length / 5) + 1"
      :key="index"
      style="display: flex"
    >
      <div v-for="i in 5" :key="i" class="Container1">
        <el-card
          v-if="(index - 1) * 5 + i <= dataList.length"
          :body-style="{ padding: '0px' }"
        >
          <div v-if="(index - 1) * 5 + i <= dataList.length" class="Positive1">
            <p style="background-color: burlywood">
              我是正面{{ dataList[(index - 1) * 5 + i - 1] }}
            </p>
            <i-twemoji-flag-china class="loginIcon" />
          </div>
          <div v-if="(index - 1) * 5 + i <= dataList.length" class="Reverse1">
            <p style="background-color: burlywood">
              我是反面{{ dataList[(index - 1) * 5 + i - 1] }}
            </p>
            <i-twemoji-flag-china class="loginIcon" />
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";

const { push } = useRouter();
const selectedDate = ref("");
// 数据列表
const dataList = ref([] as number[]);

onBeforeMount(() => {
  dataList.value.length = 0;
  for (let i = 0; i < 8; i++) {
    dataList.value.push(i);
  }
  console.log("数据条数 = ", dataList.value.length);
});

function goMain() {
  push({ path: "/main" });
}
</script>

<style lang="scss">
.loginIcon {
  font-size: 10em;
  background-color: aquamarine;
}

.Container {
  height: 250px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  position: relative;
  transform-style: preserve-3d;
}

.Positive {
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: aqua;
  position: absolute;
  backface-visibility: hidden;
  transition: 1.5s;
}

.Reverse {
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  transition: 1.5s;
}

.Container:hover .Positive {
  transform: rotateY(180deg);
}
.Container:hover .Reverse {
  transform: rotateY(0deg);
}

.Container1 {
  flex: 1;
  height: 250px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  position: relative;
  transform-style: preserve-3d;
}

.Positive1 {
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: aqua;
  position: absolute;
  backface-visibility: hidden;
  transition: 1.5s;
}

.Reverse1 {
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  transition: 1.5s;
}

.Container1:hover .Positive1 {
  transform: rotateY(180deg);
}
.Container1:hover .Reverse1 {
  transform: rotateY(0deg);
}
</style>
