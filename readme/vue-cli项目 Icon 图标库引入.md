# Icon 图标库引入

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

### 安装插件
```
yarn add unplugin-icons
```

### 安装图标数据
```
yarn add @iconify/json
```

### 配置 vue3 编译器
*我在本地运行的时候不配置这个也可以正常使用*
```
// Vue 3 支持需要对等依赖@vue/compiler-sfc：
yarn @vue/compiler-sfc
```
```vue.config.js
=> vue.config.js

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      Icons({ compiler: "vue3" }),
    ],
  },
});
```
```tsconfig.json
=> tsconfig.json

{
  "compilerOptions": {
    "types": [
      "unplugin-icons/types/vue",
    ]
  }
}
```

### 自动引入

#### unplugin-vue-components
``` vue.config.js
=> vue.config.js

const { defineConfig } = require("@vue/cli-service");
const Icons = require("unplugin-icons/webpack");
const IconsResolver = require("unplugin-icons/resolver");
const Components = require("unplugin-vue-components/webpack");

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
const IconsResolver = require("unplugin-icons/resolver");
const AutoImport  = require("unplugin-auto-import/webpack");

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
<icon-mdi-account /> => <IconMdiAccount />
```
