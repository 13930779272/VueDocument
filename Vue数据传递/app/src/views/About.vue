<template>
  <div>
    <ul>
      <li v-for="item in listOn" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    /* 
      v-for与v-if都是渲染，但是当我们需要对一个列表进行条件渲染时，我们就倾向于v-for与v-if写在同一个元素上这时，v-for比v-if的优先级高，
      如果我们需要对列表的某些项进行条件渲染我们就要把数组进行computed的二次操作来做性能优化，如果想要对整个列表进行条件渲染，需要把判断条件加到容器上
      进行性能优化

      计算属性的好处是：
        1.计算属性本来就有一个懒计算的特性，所以只有数组发生变化的时候才会重新计算
        2.这样做的话我们只针对活跃项进行渲染，渲染更加高效
        3.解耦渲染层的逻辑，可维护性（对逻辑的更改和扩展）更强
        
      加到容器元素的好处是：
        通过将 v-if 移动到容器元素，我们不会再对列表中的每个用户检查 shouldShowUsers。取而代之的是，我们只检查它一次，且不会在 shouldShowUsers 为否的时候运算 v-for。
    */
    data() {
      return {
        ary:[
          {
            id:1,
            name:'项目一',
            onoff:true
          },
          {
            id:2,
            name:'项目二',
            onoff:true
          },
          {
            id:3,
            name:'项目三',
            onoff:false
          },
          {
            id:4,
            name:'项目四',
            onoff:true
          }
        ]
      }
    },
    computed: {
      listOn:function () {
        return this.ary.filter((item) => item.onoff)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
