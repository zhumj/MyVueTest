# my_vue_test

此模板应帮助您开始使用 Vite 里面的 Vue 3 进行开发。

## 推荐的IDE设置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## TS 支持 `.vue` 文件类型

TypeScript 默认情况下无法处理 `.vue` 文件，因此我们将 `tsc' CLI 替换为 'vue-tsc' 进行类型检查。 在编辑中，我们需要[Typescript Vue Plugin（Volar）](https://marketplace.visualstudio.com/items?itemname=vue.vscode-typescript-vue-plugin)来使 TypeScript 检查到 '.vue' 类型。 

如果独立的 TypeScript 插件对您的感觉不够快，Volar 还实现了更具性能的[Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncommentcomment-1361669)。您可以通过以下步骤启用它： 

1.禁用内置的 TypeScript 扩展程序 
     
    1) 从 VSCode 的命令行中运行 'Extensions: Show Built-in Extensions' 命令 
     
    2) 查找`TypeScript and JavaScript Language Features'，右键单击并选择`Disable (Workspace)'

 2.从 VSCode 的命令行中运行 'Developer: Reload Window' 命令。

## 自定义配置

See [Vite Configuration Reference](https://vitejs.dev/config/).

## 项目设置

```sh
npm install
```

### 编译和热重载到设备

```sh
npm run dev
```

### 打包

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 从0到1学习文档

### [安装环境](./readme/%E5%AE%89%E8%A3%85%E7%8E%AF%E5%A2%83.md)
### [路由传值](./readme/%E8%B7%AF%E7%94%B1%E4%BC%A0%E5%80%BC.md)
### [父子传值](./readme/%E7%88%B6%E5%AD%90%E4%BC%A0%E5%80%BC.md)
