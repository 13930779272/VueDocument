export default function (Vue){
  Vue.component('anchoredHeading',{
    render:createElement=> {
      return createElement(
        'h' + this.level,   // 标签名称
        this.$slots.default // 子节点数组
      )
    },
    props:{
      level:{
        type:Number,
        required:true
      }
    }
  })
}