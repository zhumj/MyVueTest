const { defineConfig } = require("@vue/cli-service");
const Icons = require("unplugin-icons/webpack");
const IconsResolver = require("unplugin-icons/resolver");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        // 自动按需导入 Element Plus
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [
          // 自动按需导入 Element Plus
          ElementPlusResolver(),
          // 自动导入 Iconify 图标
          IconsResolver(),
        ],
      }),
      Icons({ compiler: "vue3", autoInstall: true }),
    ],
  },
  // devServer: {
  //   // 自定义端口
  //   port: 8081,
  // },
});
