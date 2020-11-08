// 自定义的webpack配置写在这文件中 具体配置查看官网 'https://cli.vuejs.org/zh/config/#vue-config-js'
module.exports = {
  // publicPath: process.env.NODE_ENV  process.env.NODE_ENV中存的是当前是什么开发环境
  // 生产环境下 src=https://www.lyp.com/assets/js/app.d7f4268c.js
  publicPath: process.env.NODE_ENV === 'production'?'https://www.lyp.com':'/',
  // 自定义打包后 css、js、图片等静态资源放的文件目录
  assetsDir:'assets',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。默认dist通常也都是dist
  // outputDir:'build'

  // 生产环境中会打包js默认生产js映射（xxx.js.map文件）如果你不需要生产环境的 source map，可以将productionSourceMap设置为 false 以加速生产环境构建。
  productionSourceMap:false,

  //=>设置一些webpack配置项，用这些配置项和默认的配置项合并
	configureWebpack: {
		plugins: []
  },
  // 修改项目默认的webpack配置 chainWebpack
  chainWebpack: config => {
    config.module
      .rule('images') // rule会在默认配置中给你写出来
      .use('url-loader')
        .loader('url-loader')
        .tap(options => {
          // 需要修改的配置项
          options.limit = 200*1024;
          return options
        })
  },
  // 修改webpack-dev-server配置尤其是跨域代理
  devServer:{
    proxy:{
      '/':{
        // 必须配置true，才能进行服务器代理
        changeOrigin:true,
        target:'http://api.zhufengpeixun.cn/'
      }
    }
  }
}