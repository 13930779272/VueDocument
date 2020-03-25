<template>
  <div>
    这是public页
    <hr>
    <button @click="currentView = 'A'">A</button>
    <button @click="currentView = 'B'">B</button>
    <hr>
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
  </div>
</template>

<script>
import A from '../components/A'
import B from '../components/B'
export default {
  components: {
    A,
    B
  },
  data(){
    return {
      currentView:'A'
    }
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
  beforeCreate(){
    console.log('public-beforeCreate')
  },
  created(){
    console.log('public-created')
  },
  beforeMount(){
    console.log('public-beforeMount')
  },
  mounted() {
    console.log('public-mounted')
  },
  beforeUpdate() {
    console.log('public-beforeUpdate')
  },
  updated() {
    console.log('public-updated')
  },
  beforeDestroy() {
    console.log('public-beforeDestroy')
  },
  destroyed() {
    console.log('public-destroyed')
  },
};
</script>

<style lang="scss" scoped>
</style>