import {instance} from './index'
// 测试请求没有实际的意义
export const get  = () => instance.get('http://localhost/test');
// 登录请求
export const login = (uname) => instance.post('http://localhost/login',{uname});
// 验证是否登录
export const islogin = () => instance.post('http://localhost/islogin').then(d=>d.data).then(data => {
  if(data.code === 0){
    return true
  }
  return false
})