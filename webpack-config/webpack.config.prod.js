const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 配置引入
const commonConfig = require('./webpack.config.common')
cosnt partDevServer = require('./pers-webpack/@webpack-devServer')
const partExtractCSS = require('./pers-webpack/@webpack-extractcss')
const partAutoperfixer = require('./pers-webpack/@webpack-autoprefix')
const partLoadImages = require('./pers-webpack/@webpack-loadImages')
const partSourceMap = require('./pers-webpack/@webpack-generatorSourceMaps')
const partClean = require('./pers-webpack/@webpack-clean')

const PATHS = {
  app: path.join(__dirname, "src"),
  build: path.join(__dirname, "dist")
}

const developmentConfig = merge([
  partDevServer.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT
  }),
  partExtractCSS.extractCSS({
    use: ['css-loader', partAutoperfixer.autoprefix()]
  }),
  partLoadImages.loadImages({
    options: {
      limit: 15000,
      name: '[name].[ext]'
    }
  }),
  partSourceMap.generatorSourceMap({ type: 'source-map' }),
  // clean dist
  partClean.clean(PATHS.build),

  // 优化分离
  {
    optimization: {
      splitChunks: {
        chunks: 'initial'
      }
    }
  }
])

module.exports = mode => {
  return merge(commonConfig, productionConfig, { mode })
}