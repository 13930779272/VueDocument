import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 默认根下主页
  {
    path: '/',
    name: 'home',
    component: Home,

  },
  /* 
    $route:
      获取路由信息属性
    $router:
      跳转路由的方法
    动态路由：
      主体一样但是部分内容不同，可以使用动态路由
      写法：
        /about/:id 匹配路由为(这个id是自定义的可以是任何的名字)
          /about/1
          /about/2
      提醒：当使用路由参数时，例如从 /about/lyp/id/1 导航到 /user/bar，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。
      不过，这也意味着组件的生命周期钩子不会再被调用。复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化)
      watch监控方法：
         watch:{
          '$route'(){

          }
        }
    嵌套路由：
      在路由配置中使用
        children:[{path:xxxx,component:'xxx'}]
        注意的是parent组件中需要写上router-view 要不然子组件渲染不出来
        如果进入parent下没有指定的children,又要默认添加一个组件，可以在path上写个''
    编程导航：
      $router.push(path)
      $router.replace(path)
      $router.go(number)

      可以传字符串和对象
        传字符串：'/'
        传对象：
          {
            path:'/',
            name:'home',
            query:{
              name:'哈啊哈哈'  //=>/?name='哈啊哈哈'
            },
            params:{
              name:'哈啊哈哈'  //=>注意的是路由上不会显示name，但是可以通过$route.params.name去获取
            }
          }
    重定向:
      { path: '/a', redirect: { name: 'foo' }}
      { path: '/a', redirect: { path: '/foo' }}
      { path: '/a', redirect:'foo'}
      { path: '/a', redirect:'/foo'}

    路由传参:
      基于$router.currentRoute或者$route传参
          
      基于props解耦：
        布尔模式：在路由配置项中配置一个props:true，那么子组件可以通过props去接收parmas参数不能接受query的参数（前提是跳转方式为命名路由跳转不能是path）
        函数模式：在路由配置 props:(route)=>({ nn1:route.params.nn1,name:route.query.name}),route是路由跳转的信息，query和params的传递跟普通的传递是一样的，基于path跳转只能拿到
        query的信息，基于命名路由跳转query和params都可以拿到
    
  */
  // 动态路由  
  {
    // path:'/about', //非动态路由
    // path:'/about/:qq', //动态路由
    // path:'/about/:id', //动态路由
    path: '/about/:uname/id/:id',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 下面这段代码代表延时加载
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // 嵌套路由
  {
    path: '/public',
    name: 'public',
    component: ()=> import('../views/public.vue'),
    children:[
      {
        path: 'p1',
        name: 'p1',
        component: ()=> import('../views/p1.vue')
      },
      {
        path: 'p2',
        name: 'p1',
        component: ()=> import('../views/p2.vue')
      },
      {
        path: '',
        component: ()=> import('../views/p3.vue')
      },
    ]
  },
  // 编程导航
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/login.vue')
  },
  // 重定向,当跳转p6路由的时候自动重定向到p4路由
  {
    path:'/pc',
    name:'pc',
    redirect: to => {
      console.log(to.fullPath,'重定向');
      return '/p4'
    },
    // redirect: to => {
    //   console.log(to.fullPath,'重定向');
    //   return 'p4'
    // },
    // redirect:'/p4'
    // redirect:'p4'
  },
  // 路由传参
  {
    path:'/p4',
    name:'p4',
    props:true,
    component:()=>import('../views/p4.vue')
  },
  {
    path:'/p5',
    name:'p5',
    //当做一个传递数据的钩子
    props:(route)=>{
      console.log(route)
      return {
        nn1:route.params.nn1,
        query:route.query.name
      }
    },
    component:()=>import('../views/p5.vue')
  },
  {
    path:'/p6',
    name:'p6',
    props:true,
    component:() => import('../views/p6.vue')
  },
  // 404界面
  {
    path: '*',
    name: '404',
    component: ()=> import('../views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
