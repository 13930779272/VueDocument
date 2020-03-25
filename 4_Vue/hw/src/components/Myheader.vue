<template id="myHeader">
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="请输入内容" @keyup.13="pFn" v-model.trim="val" />
  </header>
</template>

<script>
export default {
  data(){
    return {
      val:''
    }
  },
  methods: {
    pFn(){
      if(!this.val) return
      this.$emit('childFn', this.val);
      this.val = ''
    }
  },
};
</script>

<style lang="scss" scoped>
</style>