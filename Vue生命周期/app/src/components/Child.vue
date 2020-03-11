<template>
  <div>
    <input type="text" ref="txt" v-model="val">
    <button @click="add1">发送</button>
    <button @click="hook">调用hook</button>
  </div>
</template>

<script>
/* 
  hook的方式只能检测生命周期
*/
  export default {
    data(){
      return {
        val:''
      }
    },
    methods: {
      add1(){
        this.$emit('push',this.val)
        this.val = ''
      },
      hook(){
        console.log('调用hook')
        this.$emit('hook')
      }
    },

    // 当DOM挂载完成后触发该钩子
    mounted() {
      console.log('子组件DOM加载完成')
      this.$emit('mount')
    },
    created() {
      console.log('子组件数据加载完成')
    },
  }
</script>

<style lang="scss" scoped>

</style>