<template>
  <div>
    数据传递方式-子传父
    <button @click="add">{{pnum1}}</button>
  </div>
</template>

<script>
  export default {
    props:['pnum1'],
    methods: {
      add(){
        
        this.$emit('padd')
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>