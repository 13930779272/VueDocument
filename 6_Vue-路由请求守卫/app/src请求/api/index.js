// 引入axios文件
const axios = require('axios');
// 自定义拦截
const instance = axios.create();
// 默认请求头
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';


// 自定义请求拦截
instance.interceptors.request.use(config => {
  // 当每次切换路由的时候，触发router.beforeEach钩子看看跳转的路由是否需要验证，如果需要验证就发起islogin的请求来验证是否有token所以在每次请求时先拦截如果有token就必须通过请求头把token带过去
  const tok = localStorage.getItem('token');
  // 当有token的时候才能给请求头带，没有token的时候带会报错所以先判断下
  if(tok){
    config.headers['Authorization'] = tok 
  }
  console.log('请求拦截')
  return config;
}, error => {
  // Do something with request error
  return Promise.reject(error);
});


// 自定义响应拦截
instance.interceptors.response.use(response => {
  console.log('响应拦截',response);
  // 登录成功后获取到响应里的token
  const tok = response.data.token;
  // 当有token时才能种token
  if(tok){
    // 每次请求来后都种上了最新的token值
    localStorage.setItem('token',tok)
  }
  return response;
}, error => {
  // Do something with response error
  return Promise.reject(error);
});

export {instance}