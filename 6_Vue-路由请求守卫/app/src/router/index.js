/* 
 * 路由配置表 
 */
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
   * 
   * to:去哪
   * from：从哪里来
   * 
   * next(); 执行之后的路由跳转
   * next(false) 中断路由跳转
   * next('/') 等同于push  或者使用  next({ path: '/' })
   * next(error):(2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
   *
   * 如果有全局和局部，那么全局优先级大
   *
   * 全局的beforeEach(要切换路由的时候触发)写到index.js里边
   *
   * 组件中的beforeRouteLeave 离开组件的时候触发，写道组件中，一般要离开某个网页的时候提示信息
   * 复用组件使用beforeRouteUpdate去进行监听，只有复用组件的时候触发,写到组件中
   *
   * 路由中的beforeEnter 进入路由的时候触发，写道需要监控的路由身上。
   *
   *
   * 
   * 导航被触发。
   * 在失活的组件里调用离开守卫。
   * 调用全局的 beforeEach 守卫。
   * 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
   * 在路由配置里调用 beforeEnter。
   * 解析异步路由组件。
   * 在被激活的组件里调用 beforeRouteEnter。
   * 调用全局的 beforeResolve 守卫 (2.5+)。
   * 导航被确认。
   * 调用全局的 afterEach 钩子。
   * 触发 DOM 更新。
   * 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
   *
   */

  {
    path: '/b1',
    component: () => import('../views/b1.vue'),
    // 进入路由的时候触发，写到路由表的需要监控的路由配置项里。
    beforeEnter: (to, from, next) => {
      console.log('=====>路由beforeEnter',from,to);
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
  {
    path:'/meta',
    name:'meta',
    component:() => import('../views/meta.vue'),
    // 路由元信息
    meta:{requireAuth:true}
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
/* 
 * 全局注册路由钩子
 *  不管路由怎么跳转，都会触发这三个守卫钩子，
 */
// 全局前置守卫全局的路由条转之前触发,触发这个钩子是还没有对当前的路由进行跳转,在
router.beforeEach((to, from, next) => {
  /*  
   * to:即将要去的路由信息、
   * from:将要离开的路由信息
   * next() :进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
   */
  console.log('=====>全局beforeEach',from,to);
  if (to.fullPath === '/b1' && from.fullPath === '/b2') {
    alert('全局')
  }
  // 查看是否需要验证
  if(to.matched.every(item => item.meta.requireAuth)){
    alert('本页面需要验证')
    next(false)
  }else{
    next()
  }
  
})

// 全局解析守卫:同时在所有组件内守卫和异步路由组件被解析之后
router.beforeResolve((to,from,next) => {
  console.log('=====>全局beforeResolve')
  next()
})

// 全局后置守卫路由跳转完成后触发，不需要next函数，不能改变导航本身
router.afterEach((to,from) => {
  console.log('=====>全局afterEach',from,to)
})

// 路由报错的回调(next(error))
router.onError(() => {
  console.log('路由报错')
})
