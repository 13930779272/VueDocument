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
      提醒：当使用路由参数时，例如从 /about/lyp/id/1 导航到 /user/bar，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化)
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

    路由传参:
      可以在路由配置项中配置一个props,如果为true，那么子组件可以通过
      props去接收parmas参数
        可以看Home.vue中的 p4
    
  */
  // 动态路由  
  {
    // path:'/about', //非动态路由
    // path:'/about/:qq', //动态路由
    // path:'/about/:id', //动态路由
    path: '/about/:uname/id/:id',
    name: 'about',
    // 写上这句话代表需要验证
    meta: {
      reg: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 下面这段代码代表延时加载
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },


  // 编程导航
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },


  // 404界面
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  },
]
import {islogin} from '../api/api'

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



// 跳转路由的时候触发
router.beforeEach(async (to, from, next) => {
  // console.log(to,from);
  // 查看有item.meta.reg是否为true，是true的话就进行验证
  let mt = to.matched.some(item => item.meta.reg);
  console.log(mt)
  if(mt){
    let isd = await islogin()
    if(isd){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
  // console.log(mt)
  
})

export default router