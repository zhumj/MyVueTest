# vue-cli项目 按需引入Element Plus

### [遇到的报错和解决办法](./%E9%81%87%E5%88%B0%E7%9A%84%E6%8A%A5%E9%94%99%E5%92%8C%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.md)
### [安装环境](./%E5%AE%89%E8%A3%85%E7%8E%AF%E5%A2%83.md)
### [国际化](./%E5%9B%BD%E9%99%85%E5%8C%96.md)
### [路由传值](./%E8%B7%AF%E7%94%B1%E4%BC%A0%E5%80%BC.md)
### [值的传递：父传子、子传父、兄弟间传递](./%E5%80%BC%E7%9A%84%E4%BC%A0%E9%80%92%EF%BC%9A%E7%88%B6%E4%BC%A0%E5%AD%90%E3%80%81%E5%AD%90%E4%BC%A0%E7%88%B6%E3%80%81%E5%85%84%E5%BC%9F%E9%97%B4%E4%BC%A0%E9%80%92.md)
### [鼠标经过或悬停变小手](./%E9%BC%A0%E6%A0%87%E7%BB%8F%E8%BF%87%E6%88%96%E6%82%AC%E5%81%9C%E5%8F%98%E5%B0%8F%E6%89%8B.md)
### [vue-cli项目 Icon 图标库引入](./vue-cli%E9%A1%B9%E7%9B%AE%20Icon%20%E5%9B%BE%E6%A0%87%E5%BA%93%E5%BC%95%E5%85%A5.md)

## 安装 unplugin-vue-components 和 unplugin-auto-import 插件
```
npm install -D unplugin-vue-components unplugin-auto-import
=> 或者
yarn add unplugin-vue-components unplugin-auto-import
```

## 配置vue.config.js
```vue.config.js
=> vue.config.js

const { defineConfig } = require("@vue/cli-service");
// 添加 AutoImport、Components、ElementPlusResolver
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  transpileDependencies: true,
  // 添加 configureWebpack
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
```

## 测试验证
```
<el-divider />
<el-button />
```
运行时会自动生成 auto-imports.d.ts 和 components.d.ts 两个文件，网上说是在 auto-imports.d.ts 自动导入生成组件，但是我的是在 components.d.ts 自动导入生成组件
```components.d.ts
=> components.d.ts

import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ElButton: typeof import('element-plus/es')['ElButton']
    ElDivider: typeof import('element-plus/es')['ElDivider']
  }
}

export {}
```

## 按需引入全局配置与国际化
```App.vue
=> App.vue

<template>
  // ...
  <div> ... </div>
  // 下面这一行是 Element Plus 全局配置
  <el-config-provider size="small" :z-index="3000" :locale="mLocale"></el-config-provider>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import zhCn from "element-plus/lib/locale/lang/zh-cn";

export default class AppView extends Vue {
  mLocale = zhCn;
}
</script>
```

## 注意
### 按需引入用了插件unplugin-vue-components，因此写ElMessage这样的写在JS文件里的组件识别不到css文件，解决：
```main.ts
=> main.ts

import "element-plus/theme-chalk/el-message.css";

=> 也可以全局引入样式

import "element-plus/dist/index.css";
```

### Icon 图标需要另外引入，引入操作请看：[Icon 图标库引入](./Icon%20%E5%9B%BE%E6%A0%87%E5%BA%93%E5%BC%95%E5%85%A5.md)
