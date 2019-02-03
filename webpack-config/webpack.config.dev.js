const merge = require('webpack-merge')

// 把这个称为原子webpack配置
const commonConfig = require('./webpack.config.common')
const partsDevServer = require('./pers-webpack/@webpack-devServer')
const partsLoadImages = require('./pers-webpack/@webpack-loadImages')

const developmentConfig = merge([
  partsDevServer.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT
  }),
  partsLoadImages.loadImages()
])

module.exports = mode => {
  return merge(commonConfig, developmentConfig, { mode })
}