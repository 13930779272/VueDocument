<template>
  <div>
    <h1>这是公共页1</h1>
    <h2>This is an public1 page</h2>
  </div>
</template>

<script>
  export default {
    created() {
      console.log(this.$route)
    },
  }
</script>

<style lang="scss" scoped>

</style>