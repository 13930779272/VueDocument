<template>
  <div>
    这是bus2
    <button>{{num}}</button>
  </div>
</template>

<script>
import bus from '../bus'

export default {
  data() {
    return {
      num:100
    }
  },
  created() {
    bus.$on('tongbu',(val) => {
      this.num = val
    })
  },
}
</script>

<style lang="scss" scoped>

</style>