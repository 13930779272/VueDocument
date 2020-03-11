<template>
  <div class="home">
    home
    <ul class="list" ref="list" id="list">
      <li v-for="(item,i) in ary" :key="i" >{{item}}</li>
    </ul>
    <button @click="xiaohui">销毁组件</button>
    <hr>
    <Child @push="add" @mount="jiakong" @hook:created="hook" @hook="hook1"/>
  </div>
</template>

<script>
import Child from '../components/Child'
export default {
  /* 
    beforeCreate：在这只有Vue的一个实例data与mothods都还没有初始化,组件实例被创建之初，组件的属性生效之前
  */
  beforeCreate() {
    console.log(this.$data,this.add,'beforeCreate') // undefined undefined "beforeCreate"
  },
  /* 
    此时打印data与methods都已经初始化完毕可以拿到
    组件实例已经完全创建，属性也绑定，但真实 dom 还没有生成，$el 还不可用
  */
  created(){
    console.log(this.$data,this.add,'created')
    this.timer = setInterval(() => {
      this.num ++
      console.log(this.num)
    },1000)
  },
  /* 
    此时打印dom拿不到，数据都可以拿到
    在挂载开始之前被调用：相关的 render 函数首次被调用
  */
  beforeMount() {
    console.log(this.$refs.list,this.$data,'beforeMount')
  },
  /* 
    此时Dom可以拿到就可以进行DOM操作了
    el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
  */
  mounted() {
    console.log(this.$refs.list,this.$data,'mounted')
  },
  /* 
    组件数据更新之前调用，发生在虚拟 DOM 打补丁之前
  */
  beforeUpdate() {
    console.log(list.children,this.ary.length,'beforeUpdate') // [li, li, li, li, li] 6 "beforeUpdate"
  },
  /* 
    数据更新之后调用，此时已经多了一个li
  */
  updated() {
    console.log(list.children,this.ary.length,'updated') // [li, li, li, li, li, li] 6 "updated"
  },
  /* 
    组件销毁前调用
  */
  beforeDestroy(){
    console.log('beforeDestory')
  },
  /* 
    组件销毁后调用
  */
  destroyed() {
    clearInterval(this.timer) // 此时定时器已经停止
  },
  components:{
    Child
  },
  data(){
    return {
      ary:[
        'will you remmber me',
        '由零开始',
        '当年情',
        '张国荣',
        '风再起时'
      ],
      num:1,
      timer:null
    }
  },
  methods: {
    add(val){
      this.ary.push(val)
    },
    jiakong(){
      console.log('监控到了子组件的DOM挂载完成')
    },
    hook(){
      console.log('监控到了子组件的数据加载完成')
    },
    hook1(){
      console.log('可以传递')
    },
    xiaohui(){
      // $destory() 完全销毁一个实例，解绑与其他实例的连接，解绑全部指令以及事件监听器
      this.$destroy()
    }
  },
}
</script>

<style scoped>
.list{
  list-style: none;
}
</style>