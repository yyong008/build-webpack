# 打包结果分析

Offical Analyse Tool

 webpack --profile --json > stats.json
 webpack --profile --json | Out-file 'stats.json' --Encoding OEM

 [官方分析打包的工具，需要打包的json文件](http://webpack.github.io/analyse)

webpack-bundle-analyzer

  插件
    BundleAnalyzerPlugin
  命令行
    webpack-bundle-analyzer stats.json