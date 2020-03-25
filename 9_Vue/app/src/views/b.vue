<template>
  <div>
    <h1>This is an B page</h1>
    <button @click="add1">{{num1}}</button>
  </div>
</template>

<script>
import { bus } from '../bus'
  export default {
    data(){
      return {
        num1:0
      }
    },
    methods: {
      // 当点击按钮时改变num1同时把值给传到a
      add1(){
        this.num1 ++
        bus.$emit('changeb', this.num1)
      }
    },
    created() {
      bus.$on('changea',(val)=> {
        this.num1 = val
      })
    },
  }
</script>

<style lang="scss" scoped>

</style>