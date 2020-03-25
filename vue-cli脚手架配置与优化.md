### vue-cli脚手架的配置与优化 （https://cli.vuejs.org/）

#### 安装脚手架
```
npm install -g @vue/cli
# OR
yarn global add @vue/cli

vue --version 查看cli版本
```
#### 基于脚手架创建项目
```
vue create xxx
```
#### 选择配置项
+ 选择默认配置项（后期自己安装需要的模块和进行配置）
+ 手动选择配置项（一般选择这个）

  - babel（babel-preset-vue-app）
      babel-preset-env最新的ECMAScript功能、转换Vue JSX 转换generator和async/await等
  - Router 和 Vuex
  - CSS 预处理器（SASS/LESS/Stylus）
  - Linter / Formatter （eslint 语法检测）
  - Unit testing单元测试 和 E2E Testing端到端测试
  - history mode router
  - less 
  - 选择自动化代码格式化检测
   配合vscode使用的是ESLint+Prettier           
  - 把选择的配置保存方便下一次用
  - 配置信息放到单独的文件中还是 In package.json中
