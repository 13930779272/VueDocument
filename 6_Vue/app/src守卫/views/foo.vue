<template>
  <div>
    foo
    <router-link to="/" tag="button">主页</router-link>
    <router-link to="/foo/1" tag="button">foo1</router-link>
    <router-link to="/foo/2" tag="button">foo2</router-link>
  </div>
</template>

<script>
  export default {
    // 只有复用组件时才会触发
    beforeRouteUpdate(to,from,next){
      console.log(to,from);
      next()
    },
    // 离开某个组件时触发
    beforeRouteLeave (to, from, next) {
      let b = confirm('确定离开吗');
      if(b){
        next()
      }else{
        next(false)
      }
      
    }
  }
</script>

<style lang="scss" scoped>

</style>