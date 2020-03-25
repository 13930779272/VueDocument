<template>
  <div>
    <p>亲请登录</p>
    <hr >
    用户名：<input type="text" v-model="uname" />
    密码：<input type="password" v-model="pw" />
    <button @click="dl" >登录</button> |
    <router-link to="/" tag="button">回到主页</router-link>

    
  </div>

  
</template>

<script>
  import {get,login,islogin} from '../api/api'
  export default {
    data(){
      return {
        uname:'',
        pw:''
      }
    },
    methods: {
      dl(){
        // 第一次测试链接成功，开始正式请求
        // get().then(d=>{
        //   console.log(d)
        // })

        login(this.uname).then(d=>d.data).then(data => {
          console.log(data);
          // 登录成功
          if(data.code === 0){
            this.$router.push('/')
          }else{
            alert('登录失败')
          }
          this.uname = ''
        })










        /* 
          课件内容传参
        */
        // const {uname,pw} = this;
        // setTimeout(() => {
        //   if(uname === '111' && pw === '123'){
        //     // 跳转路由传字符串
        //     // this.$router.push('/');

        //     // 传对象
        //     // this.$router.push({
        //     //   path:'/',
        //     //   // name:'home',
        //     //   query:{
        //     //     name1:'111' //=>?name=111 拿到query的数据怎样跳转都可以
        //     //   }
        //     // });

        //     // this.$router.push({
        //     //   // path:'/',
        //     //   name:'home',
        //     //   params:{
        //     //     name1:'111' //=>想拿到params的数据就得用name跳转
        //     //   }
        //     // });

        //     // 替换不能前进后退,拿数据原理与上面相同
        //     // this.$router.replace({
        //     //   path:'/',
        //     //   // name:'home',
        //     //   query:{
        //     //     name1:'111'
        //     //   },
        //     // });


        //     // 替换不能前进后退
        //     this.$router.replace({
        //       path:'/',
        //       // name:'home',
        //       params:{
        //         name2:'222'
        //       }
        //     })
        //   }
        // },1000)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>