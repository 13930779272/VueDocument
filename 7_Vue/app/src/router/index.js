import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 重定向的几种方法
    redirect:(to) => {
      // console.log(to)
      return '/home'
    }
    // redirect: '/home'
    // redirect: {name:'home',params:{name:'haha'}}
    // redirect: {path:'/home',query:{name:'haha'}}
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path:'/login',
    component:() =>import('../views/Login.vue')
  },
  {
    path:'/public',
    name:'public',
    component:() => {
      /* 
       * component:是一个组件
       * components:{}命名视图
       * 可以是一个函数只有路由匹配成功才可以加载组件，还可以在这可以进行权限校验return 不同的路由组件 
       */
      if(1 !== 1){
        return import('../views/Public.vue')
      }
      return import('../views/Public.vue')
    }
  },
  {
    path:'/public1',
    name:'public1',
    component:() => import('../views/Public1.vue')
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
    //=>每一次地址改变，都会到路由表中自上而下逐一匹配
		//匹配到一级成功，在匹配二级...，在某级中没有则跳出来继续向下匹配
		//直到找到一个完全匹配的，则渲染对应的组件（不在向下匹配了）
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
