<template>
  <div class="about">
    <router-link to="/">Home</router-link>
    <h1>This is an about page</h1>
    <About1 />
  </div>
</template>
<script>
import About1 from './About1'
export default {
  components:{
    About1
  }
}
</script>