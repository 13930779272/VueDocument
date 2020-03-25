<template>
  <div>
    <h1>这是关于页面</h1>
    <h2>This is an about page</h2>
    <router-link to="/about/Children/1" tag="button">去about1</router-link> |
    <router-link to="/about/Children/2" tag="button">去about2</router-link> |
    <router-link to="/about/childern1" tag="button">去Children1</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    // created() {
    //   console.log(this.$router)
    // },
  }
</script>

<style lang="scss" scoped>

</style>