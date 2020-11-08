<template>
  <div>
    <h1>这是p4</h1>
    <h1>欢迎{{nn}}</h1>
  </div>
</template>

<script>
  export default {
    props:['nn'],
    created() {
      console.log(this.$route)
    },
  }
</script>

<style lang="scss" scoped>

</style>