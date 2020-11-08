const express = require('express');
const app = express();
const bodyparser = require('body-parser')

//https://www.cnblogs.com/xuxinstyle/p/9675541.html  token知识点
// 引入token,当登录成功后我们要种token进行各种验证
const jwt = require('jsonwebtoken');
// 自定义的密钥
const secret = 'lyp'
app.use(bodyparser.urlencoded({
  extended: false
}));
app.use(bodyparser.json());

// 为了方便我们只验证用户名
const sql = ['111', '222']


// 白名单
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true)
  // 第二个参数表示允许跨域的域名，* 代表所有域名  
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST') // 允许的 http 请求的方法
  // 允许前台获得的除 Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma 这几张基本响应头之外的响应头
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  if (req.method == 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next();
  }
});

// 测试用没有实际的意义
app.get('/test', (req, res) => {
  res.json({
    code: 0,
    msg: '测试成功'
  })
})
// 登录
app.post('/login', (req, res) => {
  const {
    uname
  } = req.body;
  console.log('请求了')
  if (sql.includes(uname)) {
    res.json({
      code: 0,
      msg: '登陆成功',
      // 登录成功通过响应把token带过去种token
      token: jwt.sign({
        user: uname
      }, secret, {
        // 生效时间以秒为单位
        expiresIn: 20
      })
    })
  } else {
    res.json({
      code: 1,
      msg: '登录失败'
    })
  }
})

// 验证是否登录
// 前端发送token一般不是通过body发送，而是通过headers发送的
app.post('/islogin', (req, res) => {
  //Authorization值是可变的，一般Authorization||token,到底是哪个根据Access-Control-Allow-Headers配置来
  const token = req.headers.authorization;
  // token时一串码：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMTExIiwiaWF0IjoxNTc4NTQ5NDE0LCJleHAiOjE1Nzg1NDk0MzR9.td1Dd6NiissXsKZywnXQfteX-LpsjeZHKfjz2pmJ-90
  // console.log(token);
  // 所以需要解开token
  if (token) {
    jwt.verify(token, secret, (error, data) => {
      console.log(data)
      if (error) {
        res.json({
          code: 2,
          msg: '用户未登录'
        })
        return;
      }
      res.json({
        code:0,
        msg:'用户已经登录',
        token:jwt.sign({user:data.user})
      })
    })
  }else{
    res.json({
      code:1,
      msg:'用户未登录'
    })
  }
})


app.listen(80)