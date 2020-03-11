<template>
  <div>
    <button @click="tongbu">{{num}}</button>
  </div>
</template>

<script>
import bus from '../bus'
  export default {
    created() {
      bus.$on('tongbu',(val) => {
        console.log(val)
        this.num = val
      })
    },
    methods: {
      tongbu(){
        // this.num += 10
        // bus.$emit('tongbu1',this.num)
      }
    },
    data() {
      return {
        num:1
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>