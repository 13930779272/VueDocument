import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Public from '../views/Public.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    children:[
      {
        path:'C/:id',
        component:() => import('../views/AboutC1.vue')
      },
      // {
      //   path:'C2',
      //   name:'C2',
      //   component:() => import('../views/AboutC2.vue')
      // }
    ]
  },
  {
    path: '/public',
    name: 'Public',
    component: Public
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
