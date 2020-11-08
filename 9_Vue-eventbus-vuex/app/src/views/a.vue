<template>
  <div>
    <h1>This is an A page</h1>
    <button @click="add" >{{num}}</button>
    
  </div>
</template>

<script>
  /*
    把a的值传给b（点击B的add2的时候改变a）

    把b的值传给a（点击A的add2的时候改变b）
  */
  import {bus} from '../bus/index'
  export default {
    //**订阅**changeb事件，事件中把num改成传入的值,
    //点击B的时候改变A
    created() {
      bus.$on('changeb',(val)=>{
        this.num = val
      })
    },
    data(){
      return {
        num:0
      }
    },
    methods: {
      add(){
        this.num ++
        // 点击a的时候调用changea把a的num当作实参传过去，达到改变b的目的
        bus.$emit('changea',this.num)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>