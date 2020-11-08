<template>
  <div class="about">
    <h1>ABOUT页</h1>
    <h2>This is an about page</h2>
    <h3>本页需要权限验证</h3>
    <div id="nav">
      <router-link to="/" tag="button" >主页</router-link>
      <router-link to="/about/lyp/id/1" tag="button" >关于</router-link>
      <router-link to="/about/haah/id/2" tag="button" >关于</router-link>
    </div>
    <div>
      <h1>用户:{{$route.params.uname}}</h1>
      <h2 v-if="$route.params.id === '1'">欢迎老大回来</h2>
      <h2 v-if="$route.params.id === '2'">小弟不辛苦</h2>
      <img src="../assets/1laoda.png" alt v-if="$route.params.id === '1'" />
      <img src="../assets/2didi.png" alt v-if="$route.params.id === '2'" />
      <h2>{{$route.params}}</h2>
    </div>
  </div>
</template>
<script>
export default {
  // 只有路由跳转
  created() {
    // 获取路由信息属性
    // console.log(this.$route);
    // 跳转路由的方法
    // console.log(this.$router);
  },
  // 复用的时候也会触发
  watch: {
    '$route'(to,from) {

      // to跳转到哪
      // console.log(to,'to')
      // from从哪出来
      // console.log(from,'from')
    }
  },
  data(){
    return {
      ary:[
        // ../assets/1laoda.png
        '../assets/1laoda.png',
        "../assets/2didi.png"
      ]
    }
  }

};
</script>

<style>
</style>