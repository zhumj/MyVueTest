# yarn常用命令

## 从0到1学习文档
### [遇到的报错和解决办法](./readme/遇到的报错和解决办法)
### [安装环境](./readme/安装环境)
### [国际化](./readme/国际化)
### [路由传值](./readme/路由传值)
### [父子传值](./readme/父子传值)

## 安装淘宝源
- yarn config set registry https://registry.npm.taobao.org -g
- yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g 

## 查看版本
- yarn --version

## yarn的配置项
- yarn config list ：显示所有配置项
- yarn config get ：显示某配置项
- yarn config delete ：删除某配置项
- yarn config set [-g|--global] ：设置配置项

## 安装依赖包
- yarn install：安装package.json里所有包，并将包及它的所有依赖项保存进yarn.lock
- yarn install --flat ：安装一个包的单一版本
- yarn install --force ：强制重新下载所有包
- yarn install --production ：只安装dependencies里的包
- yarn install --no-lockfile ：不读取或生成yarn.lock
- yarn install --pure-lockfile ：不生成yarn.lock

## 添加依赖包（会更新package.json和yarn.lock）
- yarn add [package] ：在当前的项目中添加一个依赖包，会自动更新到package.json和yarn.lock文件中
- yarn add [package]@[version] ：安装指定版本，这里指的是主要版本，如果需要精确到小版本，使用-E参数
- yarn add [package]@[tag] ：安装某个tag（比如beta,next或者latest）
- yarn add [package] --dev/-D ：加到 devDependencies
- yarn add [package] --peer/-P ：加到 peerDependencies
- yarn add [package] --optional/-O ：加到 optionalDependencies
- yarn add [package] --exact/-E ：安装包的精确版本。例如yarn add foo@1.2.3会接受1.9.1版，但是yarn add foo@1.2.3 --exact只会接受1.2.3版
- yarn add [package] --tilde/-T ：安装包的次要版本里的最新版。例如yarn add foo@1.2.3 --tilde会接受1.2.9，但不接受1.3.0

## 移除一个依赖包
- yarn remove [package]：移除一个包，会自动更新package.json和yarn.lock

## 更新一个依赖包
- yarn upgrade [package]：用于更新包到基于规范范围的最新版本
运行脚本

## 发布依赖包
- yarn publish
