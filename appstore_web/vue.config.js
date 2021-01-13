module.exports = {
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
    // 反向代理
    devServer: {
      open: true,
      host: 'localhost',
      port: 8080,
      https: false,
      hotOnly: false,
      proxy: {
        // 配置跨域
        '/api': {
          target: 'https://vuets-api.herokuapp.com/api/',
          ws: true,
          changOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      },
      before: app => { }
    },
    publicPath: './'
  }