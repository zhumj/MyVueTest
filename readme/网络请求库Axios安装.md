# 网络请求库Axios安装

## 安装
```
yarn:
yarn add axios

npm:
npm install axios

bower:
bower install axios
```

## 结合 [vue-axios](https://github.com/imcvampire/vue-axios)
```
yarn add axios vue-axios
```
**引入**
```
=> main.ts
import { createApp } from "vue";
import App from "@/App.vue";
import axios from 'axios';
import VueAxios from 'vue-axios';

createApp(App).use(VueAxios, axios);
```

## 使用
```
用法1：
Vue.axios.get('url',{params:userId:1}).then(res => {}).catch(err => {});

用法2：
this.axios.get('url',{params:userId:1}).then(res => {}).catch(err => {});

用法3(推荐)：
this.$http.get('url',{params:userId:1}).then(res => {}).catch(err => {});
```
