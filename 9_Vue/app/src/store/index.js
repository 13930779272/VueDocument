import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 数据
    num:10,
    val:'找到一个好工作'
  },
  mutations: { // 修改数据的指令
    add(state){
      state.num ++
    }
  },
  actions: {  // 放异步请求的
  },
  modules: { 
    
  },
  getters:{
    re:state => {
      return state.val.split('').reverse().join('')
    }
  }
})
