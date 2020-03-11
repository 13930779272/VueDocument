<template>
  <div>
    数据传递props的方式
    {{pnum}}
  </div>
</template>

<script>
  export default {
    props:['pnum'],
    methods: {
      add(){
        console.log(1)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>