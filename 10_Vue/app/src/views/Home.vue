<template>
  <div class="home">
    <router-link to="/about">About</router-link>
    <br>
    <img src="../assets/1mimi.png" />
    <br>
    <input type="text" :value="1234567890" ref="txt" @blur="blur">
    <button @click="add">同步的数据{{num}}</button> |
    <button @click="add1">异步的数据{{num}}</button> |
    <button @click="add2" tag="button">触发index1aaa函数</button> |
    <button @click="add3" tag="button">触发index2aaa函数</button>
    {{re}}
  </div>
</template>

<script>
/* 
  当两个模块里有同名函数时,想要分别调用就必须加上命名空间 namespaced: true 获取的时候必须 模块名/函数 的方式获取,如果不加命名空间就不能这样获取只能函数名的方式获取调用时就是同时调用。
*/
// 通过vuex引入
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex';
export default {
  name: "home",
  methods: {
    ...mapMutations(['A/INCREMENT','A/aaa','B/aaa','B/changeVal']),
    ...mapActions(['A/asyncincrement']),
    add(){
      // 直接调用即可
      // this.increment()
      this['A/INCREMENT']()
    },
    add1(){
      // this.asyncincrement()
      this['A/asyncincrement']()
    },
    add2(){
      this['A/aaa']()
    },
    add3(){
      this['B/aaa']()
    },
    blur(){
      this['B/changeVal'](this.$refs.txt.value)
    }
  },
  // 由于 Vuex 的状态存储是响应式的，从store实例中读取状态最简单的方法就是在计算属性中返回某个状态
  computed: {
    // 获取模块的数据
    ...mapState({
      num:state => state.A.num,
      val:state => state.B.val
    }),
    // 如果有命名空间，那么mapGetters要用对象
    ...mapGetters({
      re:'B/reverses'
    })
  },

};
</script>
