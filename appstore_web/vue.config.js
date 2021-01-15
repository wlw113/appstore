module.exports = {
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
   // css相关配置
   css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      // 如发现 css.modules 报错，请查看这里：http://www.web-jshtml.cn/#/detailed?id=12
      scss: { 
        prependData: `@import "./src/styles/main.scss";`
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
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
  