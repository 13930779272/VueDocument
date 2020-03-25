### vue-router 路由管理
https://router.vuejs.org/zh/
#### 1.SPA VS MPA
- SPA：single page application 单页面应用
	- iframe
	- AMD/CMD + 打包工具
	- 专业的路由管理模块  vue-router / react-router-dom
- MPA：multi page application 多页面应用
![Alt text](./1571334886605.png)

#### 2.vue-router的基础概括
##### 下载
\$ npm i vue-router
OR
\$ yarn add vue-router

##### 实现方式
```javascript
const router = new VueRouter({
  mode: 'history | hash（默认）',
  routes: [...]
})
```
- HASH模式
使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载，根据不同的值，渲染指定DOM位置的不同数据；

- HISTORY模式
利用 H5 的 history API 来实现，这样保证 URL 就像正常的 URL，而不会向 HASH 模式中那么丑！**但是这种方式需要服务器对请求URL的支持和处理** （防止页面刷新的时候，因地址不存在而引发的404错误）
```javascript
window.history.back() / window.history.go(-1) : 回退
window.history.forward() / window.history.go(1) : 前进
window.history.length 查看历史堆栈中的页面记录数量

history.pushState(state, title, url|?xxx=xxx) ： 添加并激活一个历史记录条目（但是此时并没有实现页面的跳转，或者说浏览器并未重新加载页面，再次刷新才会加载）
history.replaceState(state, title, url)：修改当前激活的历史记录条目
window.onpopstate=function(ev){
	//=>监听处于激活状态的历史记录条目发生变化
}
```

#### 3.vue-router的基础使用
首先根据产品需求配置路由表
```javascript
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
	mode:'xxx',
	//=>一级路由
	routes:[{
		path:'/', //=>路由路径（后期跳转和匹配的时候需要，例如：<router-link to='/'> 或者 :to='{path:'/'}'）
		name:'xxx', //=>命名路由（后期可基于 <router-link :to='{name:'xxx'}'> 跳转）
		props:true, //=>如果有动态路由传递参数，直接把参数信息当做属性传递给组件，例如：path:'/list/:type/:id'，组件中就可以基于 props:['type','id'] 获取传参到的信息，跳转的时候可以 this.$router.push('/list/teacher/1000') 跳转和传递信息，当然不这样处理，也可以基于 this.$router.params 来获取传递的参数
		//component:xxx, //=>渲染的组件
		//component:_=>{
			//return import('xxx'); //=>返回的是一个promise实例（内部保存了解析并编译xxx.vue后得到的一个模块）		
		//},
		component:{
			//=>也可以是一个对象，项目中可能会出现两个<router-view>同时使用，此时给其设置name='xxx'，这样在路由表中就可以基于不同的名字来渲染多个组件了
			default:xxx,
			view2:xxx
		}
	},{
		path:'/home',
		component:xxx,
		//=>二级路由
		children:[{
			path:'',
			//=>路由重定向
			//redirect:'/home/list',
			//redirect:to=>'/home/list',
			redirect:{
				path:'/home/list', //=>或者 name='xxx' 来跳转也可以
				params:{xxx:xxx}, //=>可传递参数信息
			}
		},{
			path:'/home/add', //=>也可以写成 path='add'
			component:xxx
		}]	
	},{
		//=>404页面处理，也可以重定向
		path:'*',
		component:ErrorComponent
	}]
});

-----------------------------------------
import router from './router';
new Vue({
	router,
	...
})
```
其次构建路由视图容器（命名视图）
```
<router-view></router-view>
<router-view name='view2'></router-view>
```
最后实现路由跳转和传参（编程式导航）
```
<router-link to='/xxx'></router-link>
//=>传递参数
<router-link :to='{name:'xxx',params:{xxx:xxx}}'></router-link>

/*编程式导航：JS中实现跳转*/
this.$router.push('/xxx');
this.$router.push({name:'xxx',params:{id:100}}); //=>/xxx/100
this.$router.push({path:'/xxx/100'});
this.$router.push({path:'/xxx',query:{id:100}})；//=>/xxx?id=100 获取this.$router.query.id
this.$router.go(-1);
...
```
动态路由
```javascript
export default new Router({
	routes:[{
		path:'/xxx/:n/:m'
	}]
})

this.$router.push('/xxx/100/200');

this.$router.params = {
	n:100,
	m:200
}
```

#### 4.导航守卫（路由权限校验）
>  “导航”表示 路由正在发生改变
- 全局守卫 （写在路由表末尾）
```javascript
//=>全局前置守卫 
router.beforeEach((to,from,next)=>{
	//=>to：即将要进入的路由
	//=>from：即将要离开的路由
	//=>next()：进行管道中的下一个钩子
	//=>next(false)：终断当前导航
	//=>next('/xxx')：当前导航终断，进入到下一个导航（和$router.push一样）
});

//=>router.beforeResolve 全局解析守卫（导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用）

/=>全局后置钩子（没有next）
router.afterEach((to, from) => {
  // ...
});
```

- 路由独享守卫
```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/xxx',
      component: xxx,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

- 组件内守卫
```javascript
const xxx = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```

1.导航被触发。
2.在失活的组件里调用离开守卫。
3.调用全局的 beforeEach 守卫。
4.在重用的组件里调用 beforeRouteUpdate 守卫 。
5.在路由配置里调用 beforeEnter。
6.解析异步路由组件。
7.在被激活的组件里调用 beforeRouteEnter。
8.调用全局的 beforeResolve 守卫 。
9.导航被确认。
10.调用全局的 afterEach 钩子。
11.触发 DOM 更新。
12.用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数
