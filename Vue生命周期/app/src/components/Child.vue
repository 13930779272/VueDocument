<template>
  <div>
    <input type="text" ref="txt" v-model="val">
    <button @click="add1">发送</button>
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
      
    },
    beforeCreate() {
      console.log('Child-befoerCreate')
    },
    // 当DOM挂载完成后触发该钩子
    mounted() {
      console.log('Child-mounted')
      this.$emit('mount')
    },
    created() {
      console.log('Child-created')
    },
    beforeMount() {
      console.log('Child-beforeMunt')
    },
    beforeUpdate() {
      console.log('Child-befoerUpdate')
    },
    updated() {
      console.log('Child-updated')
    },
    beforeDestroy() {
      console.log('Child-beforeDestroy')
    },
    destroyed() {
      console.log('Child-destroyed')
    },
  }
</script>

<style lang="scss" scoped>

</style>