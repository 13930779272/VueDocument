<template>
  <div>
    <keep-alive>
      <button v-if="onoff" @click="add">{{num}}</button>
      <button v-else @click="add1">{{num1}}</button>
    </keep-alive>
   
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$route)
  },
  watch: {
    $route() {
      // console.log(this.$route);
      let {params:{id}} = this.$route
      // console.log(id)
      if (id === "1") {
        this.onoff = true;
      } else if (id === "2") {
        this.onoff = false;
        // console.log(this.onoff);
      }
    }
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
  // beforeRouteUpdate(to,from ,next){
  //   // console.log(to.params.id === '1')
  //   if(to.params.id === '1'){
  //     this.onoff = true

  //   }else if(to.params.id === '2') {
  //     this.onoff = false
  //     console.log(this.onoff)
  //   }
  //   next()
  // },
  data() {
    return {
      num: 1,
      num1: 100,
      onoff: true
    };
  },
  methods: {
    add() {
      this.num++;
    },
    add1() {
      this.num1++;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>