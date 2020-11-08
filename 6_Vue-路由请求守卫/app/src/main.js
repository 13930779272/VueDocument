import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  // js XML 语法 简写jsx
  render: h => h(App)
}).$mount('#app')
