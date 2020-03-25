<template>
  <div>
    <h1>主页</h1>
    <h2>This is an home page</h2>
    <h3>本页不需要权限验证</h3>
    {{$route.params.name1}}
    <div id="nav">
      <router-link to="/" tag="button">主页</router-link>
      <router-link to="/about/lyp/id/1" tag="button" >关于</router-link>
      <router-link to="/login" tag="button" >登录</router-link>
    </div>
    <img src="../assets/鼠你有才.png" alt="">
  </div>
</template>

<script>
  export default {
    created() {
      // console.log(this.$route,11111111)
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