const ppa = {
  template:'#temp',
  data(){
    return {
      num1:10
    }
  },
  // inject:['ary'],
  // inject:{
  //   ary
  // },
  created() {
    /*
      this.$parent拿到父级的实例
      可以通过实例获取父级的数据
      父级实例的数据就在this.$parent这个对象下
    */
    console.log(this.$parent)
  },
}