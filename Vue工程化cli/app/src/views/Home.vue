<template>
  <div class="home">
    <div id="box"></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
/* 
  less语法默认的webpack已经配置了less的配置项，所以安装一下less less-loader就可以了，style标签得加上 lang="less" scoped当前组件私有的样式
*/
.home{
  width: 300px;
  height: 300px;
  border: solid 2px #000;
  #box{
    width: 100px;
    height: 100px;
    background: url('../assets/logo.png');
  }
}
</style>