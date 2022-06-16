# Icon 图标库引入

## 从0到1学习文档
### [遇到的报错和解决办法](./%E9%81%87%E5%88%B0%E7%9A%84%E6%8A%A5%E9%94%99%E5%92%8C%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.md)
### [安装环境](./%E5%AE%89%E8%A3%85%E7%8E%AF%E5%A2%83.md)
### [国际化](./%E5%9B%BD%E9%99%85%E5%8C%96.md)
### [路由传值](./%E8%B7%AF%E7%94%B1%E4%BC%A0%E5%80%BC.md)
### [值的传递：父传子、子传父、兄弟间传递](./%E5%80%BC%E7%9A%84%E4%BC%A0%E9%80%92%EF%BC%9A%E7%88%B6%E4%BC%A0%E5%AD%90%E3%80%81%E5%AD%90%E4%BC%A0%E7%88%B6%E3%80%81%E5%85%84%E5%BC%9F%E9%97%B4%E4%BC%A0%E9%80%92.md)
### [鼠标经过或悬停变小手](./%E9%BC%A0%E6%A0%87%E7%BB%8F%E8%BF%87%E6%88%96%E6%82%AC%E5%81%9C%E5%8F%98%E5%B0%8F%E6%89%8B.md)
### [vue-cli项目 按需引入Element Plus](./vue-cli%E9%A1%B9%E7%9B%AE%20%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5Element%20Plus.md)

## 引入 Element Plus Icon 库

### 安装
```
# Yarn
$ yarn add @element-plus/icons-vue
# npm
$ npm install @element-plus/icons-vue
```

### 全局注册所有图标
```main.ts
=> main.ts

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
```

## 引入 unplugin-icons 自定义图标库

### 安装
```
npm i -D unplugin-icons

=> 或者

yarn add unplugin-icons
```

### 自动按需引入

#### unplugin-vue-components
``` vue.config.js
=> vue.config.js

const { defineConfig } = require("@vue/cli-service");
const Icons = require("unplugin-icons/webpack");
const Components = require("unplugin-vue-components/webpack");
const IconsResolver =  = require("unplugin-icons/resolvers");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [IconsResolver()],
      }),
      Icons(),
    ],
  },
});
```

#### unplugin-auto-import
```vue.config.js
=> vue.config.js

const { defineConfig } = require("@vue/cli-service");
const Icons = require("unplugin-icons/webpack");
const AutoImport  = require("unplugin-auto-import/webpack");
const IconsResolver =  = require("unplugin-icons/resolvers");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [IconsResolver()],
      }),
      Icons(),
    ],
  },
});
```

### 使用
```
// prefix - 前缀
// collection - 图标集名
// icon - 图标名
{prefix}-{collection}-{icon}

// 默认情况下以 i 为前缀：
<i-mdi-account />
// 也可以自定义前缀：
IconsResolver({
  prefix: 'icon',
})
// 然后使用：
<icon-mdi-account />

// 当然大驼峰也可以
icon-mdi-account => IconMdiAccount
```
