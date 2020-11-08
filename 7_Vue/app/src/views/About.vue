<template>
  <div>
    <h1>这是关于页面</h1>
    <h2>This is an about page</h2>
    <router-link to="/about/Children/1" tag="button">去about1</router-link> |
    <router-link to="/about/Children/2" tag="button">去about2</router-link> |
    <router-link to="/about/childern1" tag="button">去Children1</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    created() {
      /*
       * this.$router下的方法:
       *   go(n):前进或者后退n步
       *   back() :后退一步
       *   forward():前进一步
       *   push():跳转到指定的路由，实现路由切换
       *   replace():跳转到指定的路由，实现路由切换,不能后退没有历史记录
       *  实现编程式导航
       */
      console.log(this.$router)
      console.log(this.$route === this.$router.currentRoute) // true
    },
  }
</script>

<style lang="scss" scoped>

</style>