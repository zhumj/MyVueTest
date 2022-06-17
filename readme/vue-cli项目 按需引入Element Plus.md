# vue-cli项目 按需引入Element Plus

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

=> 或者使用大驼峰

<ElDivider />
<ElButton />
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
