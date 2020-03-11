<template>
  <div>
    <button @click='add1'>{{$store.state.num}}</button>
    <button @click='add2'>{{$store.state.num}}</button>
  </div>
</template>

<script>
  export default {
    data() {
      // console.log(this.$store.state)
      return {
        
      }
    },
    methods: {
      add1(){
        this.$store.commit('add')
      },
      add2(){
        this.$store.dispatch('asyncadd')
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>