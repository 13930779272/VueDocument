// store模块2
const state = {
  val:'鼠你有才'
}
const mutations = {
  aaa(){
    console.log('index2的aaa')
  },
  changeVal(state,newVal){
    state.val = newVal
  }
}
const getters = {
  reverses(){
    return state.val.split('').reverse().join('')
  }
}

// 导出
export default {
  namespaced: true,
  state,
  mutations,
  getters
}