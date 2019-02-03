# 长缓存

什么是长缓存
为什么长缓存
怎么解决长缓存

场景

  改变 app 代码， vendor 变化

解决

  提取 vendor
  hash(每次打包的hash) ->  chunkhash(代码块的hash)
  提取 webpack runtime

场景
  引入新模块， 模块顺序变化， vendor hash 变化

解决
 NamedChunksPlugin
 NamedModulesPlugin

场景
动态的引入模块

解决

  定义动态的chunkName

## 总结

独立的打包 vendor
抽出mainfest
使用NamedChunksPlugin
使用NamedModulesPlugin
动态模块给定 模块名称