import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:1000
  },
  mutations: {
    add(state){
      state.num += 100
    }
  },
  actions: {
    asyncadd(context){
      console.log(context)
      setTimeout(() => {
        // this.commit('add')
        context.commit('add')
      },1000)
    }
  },
  modules: {
  }
})
