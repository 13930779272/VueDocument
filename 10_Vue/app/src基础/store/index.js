import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 共用的数据等同于data
    num:0,
    num1:0
  },
  // mutations存放改变同步的数据的方法
  mutations: { // 等同于methods
    increment(state){
      state.num ++
      // 定时器异步,异步的写在mutations里显示数据会正常变化，但是状态监控不到
      // setTimeout(() => {
      //   state.num1 ++
      // },2000)
    }
  },
  // 放的是异步的代码，状态会监控到了
  actions: {
    asyncincrement({commit}){
      setTimeout(() => {
        commit('increment')
      },2000)
    }
  },
  modules: {
  }
})
