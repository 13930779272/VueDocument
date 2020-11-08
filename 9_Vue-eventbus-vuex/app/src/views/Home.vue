<template>
  <div>
    <h1>This is an home page</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    {{re}}
    {{num}}
    <button @click="add1">{{num}}</button>
    <pageA />
    <pageB />
  </div>
</template>

<script>
  import {mapState,mapGetters,mapMutations} from 'vuex'
  import pageA from './a'
  import pageB from './b'
  export default {
    components:{
      pageA,
      pageB
    },
    computed:{
      ...mapState(['num']),
      // num(){
      //   return this.$store.state.num
      // },
      // re(){
      //   return this.$store.getters.re
      // },
      ...mapGetters(['re'])
    },
    methods: {
      ...mapMutations(['add']),
      add1(){
        // this.$store.commit('add')
        this.add()
      }
    },
  }
</script>

<style>

</style>