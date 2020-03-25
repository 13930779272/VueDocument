// store模块1
// 如果要使用modules，那么小模块是对象


// 把名字导出
import {INCREMENT} from './creatorActions'

// 导出
export default {
  namespaced: true, // 命名空间
  state: { // 共用的数据等同于data
    num:0,
    num1:0
  },

  // mutations存放改变同步的数据的方法
  mutations: { // 等同于methods

    // 用导出的名字
    [INCREMENT](state){
      state.num ++
    },
    aaa(){
      console.log('index1的aaa')
    },
    // payload
    CHANGE_NUM1(state,payload){
      switch(payload){
        case 'DECREMENT':
          state.num1 --
          break
        case 'INCREMENT':
          state.num1++
          break
      }
    }
  },

  // 放的是异步的代码，状态会监控到了
  actions: {
    asyncincrement({commit}){
      setTimeout(() => {
        commit('INCREMENT')
      },2000)
    }
  },

  getters:{
    toDou(state){
      return state.num1<10?'0'+state.num1:''+state.num1
    }
  }
}
