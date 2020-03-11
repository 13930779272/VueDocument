<template>
  <div>
    数据传递方式$children/$parent
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sj1:1,
        sj2:2
      }
    },
    methods: {
      hs1(){
        console.log(1)
      }
    },
    created() {
      // 可以拿到父级的属性和方法
      console.log(this.$parent,'拿到了父级的实例')
    },
  }
</script>

<style lang="scss" scoped>

</style>