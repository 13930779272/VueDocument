import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/about.vue'
import Public from './components/public.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({ //
  mode:'history',
  routes:[
    {
      path:'/',
      component:Home
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/public',
      component:Public
    }
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
