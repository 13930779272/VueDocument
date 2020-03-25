<template>
  <div>
    <h1>这是about的子页面</h1>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
  },
  watch: {
    '$route'(to, from) {
      // to跳转到哪
      console.log(to, "to");
      // from从哪出来
      console.log(from, "from");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>