<template>
  <div>
    <h2 v-text="str" @click="this.$attrs.changeP"></h2>
    <h2 v-text="str" @click="this.$listeners.click"></h2>
  </div>
</template>

<script>
  export default {
    props:['attr1'],
    data() {
      return {
        str:'组件间数据传递-$attrs/$listeners'
      }
    },
    created() {
      // 拿到的是调用组件传递进来的属性信息（排除掉在props中注册过的和CLASS/STYLE/ID等）基于v-bind或者直接写的静态属性
      console.log(this.$attrs)
      // 拿到的是父組件传进来的事件信息，是基于@xxx="xxx"的事件信息
      console.log(this.$listeners)
    },
  }
</script>