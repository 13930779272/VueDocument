<template>
  <div>
    数据传递props的方式
    {{pnum}}
  </div>
</template>

<script>
/* 
  父组件把信息传递给子组件：props属性传递
    - 默认传递给子组件的属性值都是字符串格式的，如果需要传递数据的格式是数据本身应该具备的格式，我们需要基于v-bind实现传递（哪怕传递的属性值还是固定）
    - 可以把子组件当做一个标签，我们可以设置ID/CLASS/STYLE等内置属性值，这些属性也会传递给子组件，VUE帮我们处理好的，该合并的合并，该覆盖的覆盖，无需我们在PROPS中注册处理
*/
/* 
  //=>子组件设置PROPS用来接收父组件基于属性传递进来的信息：在PROPS中注册的属性，和DATA一样，也会挂载到实例上 this.title/{{title}}
  // 1.父组件传递的属性名是kebab-case格式，子组件在注册的时候应该按照camelCase/PasalCase格式来接收和使用；属性名传递的是大写的，其实也是按照小写的来传递的，所以PROPS中注册和使用的时候都按照小写的来处理即可；
  // props: ["title", "aaa"],
  // 2.注册属性的校验（不符合校验格式的，依然可以在组件中使用，只不过控制台会抛出异常信息）
*/
export default {
  props: ["pnum"],
  methods: {
    add() {
      console.log(1);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>