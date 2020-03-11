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
};
</script>

<style lang="scss" scoped>
</style>