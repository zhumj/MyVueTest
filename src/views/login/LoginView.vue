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
      <div class="LoginContainer">
        <el-card
          :body-style="{ padding: '10px' }"
          class="Login"
          :class="isRegister ? 'container-login' : ''"
        >
          <el-form :model="formData">
            <el-form-item label="账号">
              <el-input />
            </el-form-item>
            <el-form-item label="密码">
              <el-input />
            </el-form-item>
          </el-form>
          <el-button v-on:click="goMain">登 录</el-button>
          <p style="font-size: 12px">
            还没账号？<span
              style="
                color: red;
                font-size: 12px;
                cursor: pointer;
                text-decoration: underline;
              "
              @click="isRegister = !isRegister"
              >注册</span
            >
            一个吧！
          </p>
        </el-card>
        <el-card
          :body-style="{ padding: '10px' }"
          class="Register"
          :class="isRegister ? 'container-register' : ''"
        >
          <el-form :model="formData">
            <el-form-item label="账号">
              <el-input />
            </el-form-item>
            <el-form-item label="密码">
              <el-input />
            </el-form-item>
          </el-form>
          <el-button v-on:click="register">注 册</el-button>
        </el-card>
      </div>
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
          <div v-if="(index - 1) * 5 + i <= dataList.length" class="Positive">
            <p style="background-color: burlywood">
              我是正面{{ dataList[(index - 1) * 5 + i - 1] }}
            </p>
            <i-twemoji-flag-china class="loginIcon" />
          </div>
          <div v-if="(index - 1) * 5 + i <= dataList.length" class="Reverse">
            <p style="background-color: burlywood">
              我是反面{{ dataList[(index - 1) * 5 + i - 1] }}
            </p>
            <i-twemoji-flag-china class="loginIcon" />
          </div>
        </el-card>
      </div>
    </div>
    <div
      style="width: 100%; display: flex; flex-direction: row; flex-wrap: wrap"
    >
      <el-card
        v-for="i in 13"
        :key="i"
        :body-style="{ padding: '0px' }"
        class="Container2"
      >
        <div class="Positive">
          <p style="background-color: burlywood">我是正面{{ i }}</p>
          <i-twemoji-flag-china class="loginIcon" />
        </div>
        <div class="Reverse">
          <p style="background-color: burlywood">我是反面{{ i }}</p>
          <i-twemoji-flag-china class="loginIcon" />
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
// import "element-plus/theme-chalk/el-message.css";
import { ElMessage } from "element-plus";

const { push } = useRouter();
const selectedDate = ref("");
// 数据列表
const dataList = ref([] as number[]);
const isRegister = ref(false);
const formData = ref({
  username: "",
  password: "",
});

onBeforeMount(() => {
  dataList.value.length = 0;
  for (let i = 0; i < 8; i++) {
    dataList.value.push(i);
  }
  console.log("数据条数 = ", dataList.value.length);
});

function register() {
  ElMessage.info("注册");
  isRegister.value = !isRegister.value;
}

function goMain() {
  push({ path: "/main" });
}
</script>

<style lang="scss">
.loginIcon {
  font-size: 10em;
  background-color: aquamarine;
}

.LoginContainer {
  height: 14em;
  position: relative;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Login {
  width: 25rem;
  height: auto;
  text-align: center;
  position: absolute;
  backface-visibility: hidden;
  transition: 1.5s;
}

.Register {
  width: 25rem;
  height: auto;
  text-align: center;
  position: absolute;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  transition: 1.5s;
}

.LoginContainer .container-login {
  transform: rotateY(180deg);
}
.LoginContainer .container-register {
  transform: rotateY(0deg);
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
  flex: 18%;
  height: 250px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  position: relative;
  transform-style: preserve-3d;
}

.Container1:hover .Positive {
  transform: rotateY(180deg);
}
.Container1:hover .Reverse {
  transform: rotateY(0deg);
}

.Container2 {
  flex: 18%;
  height: 250px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  position: relative;
  transform-style: preserve-3d;
}

.Container2:hover .Positive {
  transform: rotateY(180deg);
}
.Container2:hover .Reverse {
  transform: rotateY(0deg);
}
</style>
