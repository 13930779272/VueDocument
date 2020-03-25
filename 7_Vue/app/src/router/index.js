import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/login',
    component:() =>import('../views/Login.vue')
  },
  {
    path:'/public',
    component:() => import('../views/Public.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    children:[
      {
        path:'children/:id',
        component: ()=>import('../views/Children.vue')
      },
      {
        path:'childern1',
        component:() => import('../views/Children1.vue')
      }
    ]
  },
  
  {
    path:'*',
    component:() => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
