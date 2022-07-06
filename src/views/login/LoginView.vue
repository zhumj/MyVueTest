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
    <div>
      <ul
        v-for="data in dataList"
        :key="data"
        style="list-style: none; margin-top: 20px"
      >
        <li style="width: 25%; float: left">
          <!-- <el-card :body-style="{ padding: '10px' }" class="Main"></el-card> -->
          <el-card :body-style="{ padding: '0px' }" class="Main">
            <div class="Before">
              <p style="background-color: burlywood">我是正面</p>
              <i-twemoji-flag-china class="loginIcon" />
            </div>
            <div class="After">
              <p style="background-color: burlywood">我是反面</p>
              <i-twemoji-flag-china class="loginIcon" />
            </div>
          </el-card>
        </li>
      </ul>
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
  for (let i = 0; i < 8; i++) {
    dataList.value.push(i);
  }
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

.Main {
  height: 250px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  position: relative;
  transform-style: preserve-3d;
}

.Before {
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: aqua;
  position: absolute;
  backface-visibility: hidden;
  transition: 1.5s;
}

.After {
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  transition: 1.5s;
}

.Main:hover .Before {
  transform: rotateY(180deg);
}
.Main:hover .After {
  transform: rotateY(0deg);
}
</style>
