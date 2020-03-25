<template>
  <div>
    <h1>主页</h1>
    <h2>This is an home page</h2>
    {{$route.params.name1}}
    <div id="nav">
      <router-link to="/" tag="button">Home</router-link>
      <router-link to="//" tag="button" >404页面</router-link>
      <router-link to="/public" tag="button" >public</router-link>
      <!-- <router-link to="/about">About</router-link> -->
      <!-- <router-link to="/about/1">About</router-link> -->
      <!-- <router-link to="/about/2">About</router-link> -->
      <router-link to="/about/lyp/id/1" tag="button" >About1</router-link>
      <router-link to="/about/haah/id/2" tag="button" >About2</router-link>
      <router-link to="/login" tag="button" >登录</router-link>
      <router-link :to="{name:'p4',query:{nn}}" tag="button" >p4</router-link>
      <router-link :to="{name:'p5',params:{nn1}}" tag="button" >p5</router-link>
      <router-link to="/p6" tag="button" >重定向</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      console.log(this.$route,11111111)
    },
    data(){
      return {
        nn:'刘月鹏',
        nn1:'大哥'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>