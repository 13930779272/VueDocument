<template>
  <div>
    <button @click="add1">{{num}}</button>
    <button @click="add2">{{num}}</button>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['num'])
  },
  methods: {
    ...mapMutations(['add']),
    ...mapActions(['asyncadd']),
    add1(){
      this.add()
    },
    add2(){
      this.asyncadd()
    }
  },
};
</script>

<style lang="scss" scoped>
</style>