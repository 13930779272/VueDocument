<template>
  <div class="home">
    home
    <ul class="list" ref="list" id="list">
      <li v-for="(item,i) in ary" :key="i" >{{item}}</li>
    </ul>
    <button @click="xiaohui">销毁组件</button>
    <button @click="upD">父组件更新数据{{nn}}</button>
    <button @click="upD1">只有父组件自己使用的数据更新{{nn2}}</button>
    <hr>
    <Child :nn="nn" @push="add" @mount="jiakong" @hook:created="hook1" />
  </div>
</template>

<script>
/* 
 * home路由组件跳转到public路由组价的生命周期过程：
 *   public-beforeCreate
 *   public-created
 *   public-beforeMount
 *   home-beforeDestory
 *   home-destroyed
 *   public-mounted
 * 加载渲染生命周期
 *   父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted
 *
 * 子组件自己的数据更新过程（子组件自己的数据）
 *   子 beforeUpdate -> 子 updated
 *
 * 父组件更新过程
 *  当父组件没有给子组件传递动态使用的数据(父组件没有给子组件传递数据，或者并不是传递到子组件的父组件数据进行更新)
 *   父 beforeUpdate -> 父 updated
 *   父组件更新子组件并不会更新
 * 
 *  当父组件给子组件传递动态使用的数据（子组件用到的父组件传递的数据的更新）
 *   父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated
 *   父组件更新子组件必然重新更新，但是子组件的生命周期只会执行数据更新的过程
 * 
 *   data函数只在组件第一次渲染的时候在beforeCreate和created之间执行一次，组件重新渲染的时候data函数不会再执行只会执行数据更新的生命钩子
 *
 * 销毁过程
 *   父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed
 */
import Child from '../components/Child'
export default {
  /* 
   * beforeCreate：在这只有Vue的一个实例data与mothods都还没有初始化,组件实例被创建之初，组件的属性生效之前
   */
  beforeCreate() {
    console.log(this.$data,this.add,'home-beforeCreate') // undefined undefined "beforeCreate"
  },
  /* 
   * 此时打印data与methods都已经初始化完毕可以拿到
   * 组件实例已经完全创建，属性也绑定，但真实 dom 还没有生成，$el 还不可用
   */
  created(){
    console.log(this.$data,this.add,'home-created')
    // this.timer = setInterval(() => {
    //   this.num ++
    //   console.log(this.num)
    // },1000)
  },
  /* 
   * 此时打印dom拿不到，数据都可以拿到
   * 在挂载开始之前被调用：相关的 render 函数首次被调用
   */
  beforeMount() {
    console.log(this.$refs.list,this.$data,'home-beforeMount')
  },
  /* 
   * 此时Dom可以拿到就可以进行DOM操作了
   * el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
   */
  mounted() {
    console.log(this.$refs.list,this.$data,'home-mounted')
  },
  /* 
   * 组件数据更新之前调用，发生在虚拟 DOM 打补丁之前
   */
  beforeUpdate() {
    console.log(list.children,this.ary.length,'home-beforeUpdate') // [li, li, li, li, li] 6 "beforeUpdate"
  },
  /* 
   * 数据更新之后调用，此时已经多了一个li
   */
  updated() {
    console.log(list.children,this.ary.length,'home-updated') // [li, li, li, li, li, li] 6 "updated"
  },
  /* 
   * 组件销毁前调用
   */
  beforeDestroy(){
    // alert('home-beforeDestory')
    console.log('home-beforeDestory')
  },
  /* 
   * 组件销毁后调用
   */
  destroyed() {
    console.log('home-destroyed')
    clearInterval(this.timer,) // 此时定时器已经停止
  },
  components:{
    Child
  },
  data(){
    console.log('home-data')
    return {
      ary:[
        'will you remmber me',
        '由零开始',
        '当年情',
        '张国荣',
        '风再起时'
      ],
      num:1,
      timer:null,
      nn:100,
      nn2:10
    }
  },
  methods: {
    add(val){
      this.ary.push(val)
    },
    jiakong(){
      console.log('监控到了子组件的DOM挂载完成')
    },
    hook1(){
      console.log('监控到了子组件的数据加载完成')
    },
    xiaohui(){
      // $destory() 完全销毁一个实例，解绑与其他实例的连接，解绑全部指令以及事件监听器,
      // 销毁组件并不是组件没有了而是这个组件的数据、事件……都不能再更改或者触发而发生变化
      this.$destroy()
    },
    // 父组件的数据更新函数
    upD(){
      this.nn = 1000
    },
    upD1(){
      this.nn2 = 1000
    }
  },
}
</script>

<style scoped>
.list{
  list-style: none;
}
</style>