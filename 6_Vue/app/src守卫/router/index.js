import Vue from 'vue'
import VueRouter from 'vue-router'
import BeforeEach from '../views/beforeEach.vue'

Vue.use(VueRouter)

const routes = [
  // 默认根下主页
  {
    path: '/',
    name: 'BeforeEach',
    component: BeforeEach,
  },
  /* 
    next(); 执行之后的路由跳转
    next(false) 中断路由跳转
    next('/') 等同于push  或者使用  next({ path: '/' })

    如果有全局和局部，那么全局优先级大

    全局的beforeEach(要切换路由的时候触发)写到index.js里边

    组件中的beforeRouteLeave 离开组件的时候触发，写道组件中，一般要离开某个网页的时候提示信息
    复用组件使用beforeRouteUpdate去进行监听，只有复用组件的时候触发,写到组件中

    路由中的beforeEnter 进入路由的时候触发，写道需要监控的路由身上。


    
    导航被触发。
    在失活的组件里调用离开守卫。
    调用全局的 beforeEach 守卫。
    在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
    在路由配置里调用 beforeEnter。
    解析异步路由组件。
    在被激活的组件里调用 beforeRouteEnter。
    调用全局的 beforeResolve 守卫 (2.5+)。
    导航被确认。
    调用全局的 afterEach 钩子。
    触发 DOM 更新。
    用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。

*/

  {
    path: '/b1',
    component: () => import('../views/b1.vue'),
    // 进入路由的时候触发，写道需要监控的路由身上。
    beforeEnter: (to, from, next) => {
      /* 
        to:去哪
        from：从哪里来
        next:为一个函数只有调用 了next才正常往下走
      */
      // console.log(to,from);
      if (to.fullPath === '/b1' && from.fullPath === '/b2') {
        alert('局部')
      }
      // next为一个函数只有执行了next才正常往下走
      next()
    }
  },
  {
    path: '/b2',
    component: () => import('../views/b2.vue')
  },
  {
    path: '/foo/:id',
    component: () => import('../views/foo.vue')
  },
  {
    path: '/foo2',
    component: () => import('../views/foo2.vue')
  },
  // 404界面
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// 全局的切换路由的时候触发
router.beforeEach((to, from, next) => {
  // console.log(to,from);
  if (to.fullPath === '/b1' && from.fullPath === '/b2') {
    alert('全局')
  }
  next()
})