<template>
  <div>
    home
    <div ref="box">这是一个盒子</div>
    <hr>
    <Prop :pnum="num"/>
    <hr>
    <Emit :pnum1="num1" @padd="add" />
    <hr>
    <Ref ref="R"/>
    <hr>
    <Child/>
    <hr>
    <button @click="tongbu">{{num2}}</button>
    <Bus/>
    <hr>
    <Pr/>
    <hr>
    <Vuex/>
    <hr>
    <Vuex2/>
    <hr>
    <Bus2/>
    <hr>
    <AttrListeners v-if="isRender" :attr1="attr1" :attr2="attr2" :attr3="attr3" class="active" :changeP="changeP" @click="changeP" @xxx="changeP" />
    <p v-text="str"></p>
  </div>
</template>

<script>
import Prop from '../components/1_prop'
import Emit from '../components/2_emit'
import Ref from '../components/3_ref'
import Child from '../components/4_$children'
import bus from '../bus'
import Bus from '../components/5_bus'
import Pr from '../components/6_Provide-inject'
import Vuex from '../components/7_vuex'
import Vuex2 from '../components/8_vuex2'
import Bus2 from '../components/9_bus2'
import AttrListeners from '../components/10_$attr-$listeners'
export default {
  data(){
    return {
      num:1,
      num1:10,
      num2:100,
      ary:[1,2,3,4],
      attr1:100,
      attr2:200,
      attr3:300,
      str:'哈哈哈',
      isRender:true,
      timer:null
    }
  },
  components: {
    Prop,
    Emit,
    Ref,
    Child,
    Bus,
    Pr,
    Vuex,
    Vuex2,
    Bus2,
    AttrListeners
  },
  methods: {
    add(){
      this.num1 += 10
    },
    tongbu(){
      this.num2 += 100
      bus.$emit('tongbu',this.num2)
    },
    changeP(){
      this.str = '呵呵呵'
    }
  },
  mounted() {
    /* 
      ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例，可以拿到子组件的属性方法
        1.获取dom元素this.$refs.box
        2.获取子组件中的data this.$refs.R.num
        3.调用子组件中的方法 this.$refs.R.add()
        4.拿到子组件实例

    */
    console.log(this.$refs.R) // 可以拿到子组件的实例
    console.log(this.$refs.R.num) // 可以拿到子组件实例的上的属性
    this.$refs.R.add() // 可以调用子组件实例上的方法
    console.log(this.$refs.box) // 可以拿到对应的元素


    setTimeout(_ => { // 数据变化视图必然更改，但是子组件不会再次进行渲染，所以要用v-if控制渲染
      this.isRender =  false
      this.str = '嘻嘻嘻',
      this.attr2 = 300,
      this.attr3 = 400,
      this.$nextTick(_ => { // 这样之后就会触发组件重新调用，更新数据
        this.isRender = true
      })
    },1000)
    this.timre = setInterval(_ => {
      console.log('定时器')
    },1000)
  },
  created(){
    /* 
      $parent / $children：访问父 / 子实例
    */
    console.log(this.$children,'拿到了所有的子组件的实例')


    // 在created拿到bus的数据
    // bus.$on('tongbu1',(val) => {
    //   this.num2 = val
    // })
  },
  // provide(){
  //   console.log(this)
  //   return {
  //     ary:this.ary
  //   }
  // }
  provide:{
    ary:[1,2,3,4]
  },
  beforeDestroy (){
    clearInterval(this.timre)
  }
};
</script>

<style lang="scss" scoped>
</style>