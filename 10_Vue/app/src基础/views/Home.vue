<template>
  <div class="home">
    <router-link to="/about">About</router-link>
    <br>
    <img src="../assets/1mimi.png" />
    <br>
    <button @click="add">同步的数据{{num}}</button> |
    <button @click="add1">异步的数据{{num}}</button>
  </div>
</template>

<script>
// 通过vuex引入
import {mapState,mapMutations,mapActions} from 'vuex';
export default {
  name: "home",
  components: {

  },
  methods: {
    // 对象展开运算符拿到改变数据的方法
    ...mapMutations(['increment']),
    ...mapActions(['asyncincrement']),
    add(){
      // 获取同步改变数据的方法：this.$store.commit('方法函数')
      // this.$store.commit('increment');


      // 直接调用即可
      this.increment()

    },
    add1(){
      // 获取获取异步改变数据的方法：this.$store.dispatch('方法函数')
      // this.$store.dispatch('asyncincrement')

      this.asyncincrement()
    }
  },
  // 由于 Vuex 的状态存储是响应式的，从store实例中读取状态最简单的方法就是在计算属性中返回某个状态
  computed: {


    // ...对象展开运算符
    // 另一种获取数据的方法，有多个数据就在数据里继续写
    ...mapState(['num']),


    // num(){
    //   // 获取数据的方法，当数据较多时会导致代码冗余
    //   // return this.$store.state.num
    // },
    num1(){
      return this.$store.state.num1
    }
  },
};
</script>
