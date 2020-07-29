# 优化打包速度

分开 vendor 和 app
使用 DllPlugin
使用 DllReferencePlugin

压缩处理 webpack
UglifyPlugin 一般的是默认的串行的处理。这里我们使用并行的处理，使用 parallel: true, cache: true

HappyPack loader 的处理方式

babel-loader options.cacheDirectory include exclude

resolve
devtool sourcemap
cache-loader

node
webpack
