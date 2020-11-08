<template>
  <div>
    <input type="text" ref="txt" v-model="val">
    <button @click="add1">发送</button>
    <span>父组件的数据{{nn}}</span> |
    <button @click="upDt">更新子组件自己的数据{{nn1}}</button>
  </div>
</template>

<script>
/* 
  hook的方式只能检测生命周期
*/
  export default {
    
    /*  
     * 组件的data函数只有在组件第一次渲染的时候执行，data的数据也会挂载到实例上
     * 子组件重新渲染的时候data函数不会再执行（只有第一次渲染子组件，在beforeCreate和created中间的时候执行一次），
     * 但是methods computed watch v-if配合$nextTick()等都可以达到这个效果
     */
    data(){
      console.log("=====>Child-data")
      return {
        val:'',
        nn1:100000
      }
    },
    // 会挂载到实例上
    props:['nn'],
    methods: {
      add1(){
        this.$emit('push',this.val)
        this.val = ''
      },
      // 子组件数据更新的函数
      upDt(){
        this.nn1 = 1000
      }
    },
    beforeCreate() {
      console.log('=====>Child-befoerCreate')
    },
    // 当DOM挂载完成后触发该钩子
    mounted() {
      console.log('=====>Child-mounted')
      this.$emit('mount')
    },
    created() {
      console.log('=====>Child-created',this)
    },
    beforeMount() {
      console.log('=====>Child-beforeMunt')
    },
    beforeUpdate() {
      console.log('=====>Child-befoerUpdate')
    },
    updated() {
      console.log('=====>Child-updated')
    },
    beforeDestroy() {
      console.log('=====>Child-beforeDestroy')
    },
    destroyed() {
      console.log('=====>Child-destroyed')
    },
  }
</script>

<style lang="scss" scoped>

</style>