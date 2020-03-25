<template>
  <div>
    <h1>This is an About2</h1>
    {{$store.state.A.num}}
    {{$store.state.A.num1}}
    <button @click="del">-</button>
    {{toDou}}
    <button @click="add">+</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapState({
        num1:state => state.A.num1
      }),
      // 
      ...mapGetters({
        toDou:'A/toDou'
      })
    },

    // 调用加减函数并传入payload参数
    methods: {
      ...mapMutations(['A/CHANGE_NUM1']),
      del(){
        this['A/CHANGE_NUM1']('DECREMENT')
      },
      add(){
        this['A/CHANGE_NUM1']('INCREMENT')
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>