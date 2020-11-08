<template>
  <div>
    <router-link to="/" class="shouye">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/public" >公共</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  /* 
    单页SPA的优点：
      不刷新页面，在当前页面切换多页的操作方式，提高用户体验
      一些后端逻辑可以到前端来做，提高前端的业务开发能力
      能够共用一些静态资源，减少HTTP请求
      能够实现真正的前后端分离
    通过改变hash达到页面的跳转：
      /  		-> home.vue
      /about  -> about.vue
      /public -> public.vue
    1.安装路由：
      npm install vue-router 或者 yarn add vue-router
    2.配置main.js文件
      1.引包：
        import VueRouter from "vue-router"
      2.安装路由功能：
        Vue.use(VueRouter)
      3.实例化VueRouter
        const router = new VueRiuter({
          routes:[
            {
              path:'指定的路径'，
              component：响应的组件
            }
          ]
        })
      4.挂路由
        默认配置时hash路由
        new Vue({
          mode:'history',  // 想要history就配置这个
          router
        })
      5(*).设置路由页面渲染的位置
				<router-view></router-view>

  */

  export default {
    
  }
</script>

<style scoped>
  .shouye{

  }
</style>