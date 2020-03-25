<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{all}}</strong>
      <span>条未选中</span>
    </span>
    <ul class="filters">
      <li>
        <a href="#/all" :class="{selected:val === 'all'}" @click="reType" >全部</a>
      </li>
      <li>
        <a href="#/unchecked" :class="{selected:val === 'unchecked'}" @click="reType" >未选中</a>
      </li>
      <li>
        <a href="#/checked" :class="{selected:val === 'checked'}" @click="reType" >已选中</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  props:['all'],
  methods: {
    reType(ev){
      const {innerText} = ev.target
      if(innerText === '全部'){
        this.val = 'all'
      }
      if(innerText === '未选中'){
        this.val = 'unchecked'
      }
      if(innerText === '已选中'){
        this.val = 'checked'
      }
      this.$emit('type',this.val)
    }
    
  },
  data(){
    return {
      val:'all'
    }
  }
};
</script>

<style lang="scss" scoped>
</style>