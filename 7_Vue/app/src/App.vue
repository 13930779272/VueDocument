<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" tag="button">Home</router-link> |
      <router-link :to="{name:'about',params:{name:'哈哈'}}" tag="button">About</router-link> |
      <router-link to="/login" tag="button">Login</router-link> |
      <router-link :to="{path:'/public',query:{name:'呵呵呵'}}" tag="button">Public</router-link> |
      <router-link to="/public1?name=呵呵呵" tag="button">Public1</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  /* 
   * vue路由的编程式导航和声明式导航
   *  声明式导航
   *   基于path跳转
   *    <router-link :to="{path:'/public',query:{name:'呵呵呵'}}" tag="button">Public</router-link>
   *    <router-link to="/public1?name=呵呵呵" tag="button">Public1</router-link>
   *    path方式跳转，不能基于params传递参数，只能基于query问号传参
   *    通过$route.query或者$router.currentRoute.query拿到query的参数
   *   基于命名路由跳转
   *    <router-link :to="{name:'about',params:{name:'哈哈'}}" tag="button">About</router-link>
   *    命名路由跳转基于query还是params都可以
   *    通过$route.params或者$router.currentRoute.params拿到params的参数
   * 
   *  编程式导航规则与声明式导航相同
   * 
   * query和params的区别：
   *  query问号传递的信息会在地址栏中体现出来
   *   比较丑
	 *   基于router-link或者this.$router.push跳转的时候，传递的参数可以在渲染组件中获取到
	 *   在当前地址下刷新，依然可以基于this.$router.currentRoute.query获取到（地址中有）
   *  params不会在地址栏中显示
   *   相对美观
   *   基于router-link或者this.$router.push跳转的时候，传递的参数也可以获取到
   *   在当前地址下刷新浏览器，params中的信息就清空了
   * 
   * 动态路由（路由跳转的地址是动态处理的）
   *  路由表
   *  {
   *    path:'/custom/list/:id',
   *  }
   *  跳转
   *   <router-link to="/about/Children/1"></router-link>
   *  获取（当前地址下刷新页面，params中的信息也不会消失）
   *   this.$router.currentRoute.params = {id:1}
   */
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
