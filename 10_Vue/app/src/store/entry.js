// store出口模块，总模块

import Vue from 'vue'
import Vuex from 'vuex'


import index1 from './index1'
import index2 from './index2'
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    A:index1,
    B:index2
  }
})