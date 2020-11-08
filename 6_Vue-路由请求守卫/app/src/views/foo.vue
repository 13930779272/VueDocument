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
    /* 三个组件独享守卫 */
    // 渲染该组件的路由被确认前触发，此时这个路由的实例还没有被创建，所以拿不到this，
    beforeRouteEnter(to,from,next){
      console.log('=====>组件内beforeRouteEnter',from,to)
      console.log(this)
      next(vm => {
        console.log(vm.data)
      })
    },
    // 只有复用组件时才会触发
    beforeRouteUpdate(to,from,next){
      console.log('=====>组件内beforeRoutrUpdate',from,to);
      console.log(this)
      next()
    },
    // 离开某个组件时触发，当离开这个路由组件是先触发当前路由钩子，再触发全局的路由守卫钩子
    beforeRouteLeave (to, from, next) {
      console.log('=====>组件内beforeRouteLeave',from,to);
      console.log(this)
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