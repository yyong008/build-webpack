# mode

在 webpack4+ 中添加了 mode 配置项，表示 webpack 现在所处的模式。不同的模式 webpack 会有不同的默认处理

## mode === 'development'

- 配置的使用方式

```js
module.exports = {
  mode: "development" | "production" | "none"
};
```

- 命令行的使用方式

```sh
webpack --mode=production
```

## 不同的形式的 webpack 的默认 行为

- development 模式下，自动的设定 node 环境变量 `process.env.NODE_ENV='development'`。
- 启用插件：

  - NamedChunksPlugin 不使用 ID 作为 chunk，使用 name
  - NamedModulesPlugin 不使用 ID 作为 module, 使用 name

```diff
// webpack.development.config.js
module.exports = {
+ mode: 'development'
- devtool: 'eval',
- cache: true,
- performance: {
-   hints: false
- },
- output: {
-   pathinfo: true
- },
- optimization: {
-   namedModules: true,
-   namedChunks: true,
-   nodeEnv: 'development',
-   flagIncludedChunks: false,
-   occurrenceOrder: false,
-   concatenateModules: false,
-   splitChunks: {
-     hidePathInfo: false,
-     minSize: 10000,
-     maxAsyncRequests: Infinity,
-     maxInitialRequests: Infinity,
-   },
-   noEmitOnErrors: false,
-   checkWasmTypes: false,
-   minimize: false,
-   removeAvailableModules: false
- },
- plugins: [
-   new webpack.NamedModulesPlugin(),
-   new webpack.NamedChunksPlugin(),
-   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
- ]
}
```

我们看到主要是在开发模式下主要是 optimization 配置项有所有改动

## mode === 'production'

- production 模式下，自动的设定 node 环境变量 `process.env.NODE_ENV='production'`。
- 启用插件：
  - FlagDependencyUsagePlugin 删除无用代码
  - FlagIncludedChunksPlugin 删除无用代码
  - ModuleConcatenationPlugin 作用域提升
  - NoEmitOnErrorsPlugin 编译出现错误，跳过输出阶段
  - OccurrenceOrderPlugin 通过模块调用次数给模块分配 ids，常用的 ids 就会分配更短的 id，使 ids 可预测，减小文件大小，推荐使用
  - SideEffectsFlagPlugin
  - UglifyJsPlugin js 代码压缩
  - TerserPlugin

```diff
// webpack.production.config.js
module.exports = {
+  mode: 'production',
- performance: {
-   hints: 'warning'
- },
- output: {
-   pathinfo: false
- },
- optimization: {
-   namedModules: false,
-   namedChunks: false,
-   nodeEnv: 'production',
-   flagIncludedChunks: true,
-   occurrenceOrder: true,
-   concatenateModules: true,
-   splitChunks: {
-     hidePathInfo: true,
-     minSize: 30000,
-     maxAsyncRequests: 5,
-     maxInitialRequests: 3,
-   },
-   noEmitOnErrors: true,
-   checkWasmTypes: true,
-   minimize: true,
- },
- plugins: [
-   new TerserPlugin(/* ... */),
-   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
-   new webpack.optimize.ModuleConcatenationPlugin(),
-   new webpack.NoEmitOnErrorsPlugin()
- ]
}
```

## mode === 'none'

```diff
// webpack.custom.config.js
module.exports = {
+ mode: 'none',
- performance: {
-  hints: false
- },
- optimization: {
-   flagIncludedChunks: false,
-   occurrenceOrder: false,
-   concatenateModules: false,
-   splitChunks: {
-     hidePathInfo: false,
-     minSize: 10000,
-     maxAsyncRequests: Infinity,
-     maxInitialRequests: Infinity,
-   },
-   noEmitOnErrors: false,
-   checkWasmTypes: false,
-   minimize: false,
- },
- plugins: []
}
```

不做任何模式相对于开发环境修改的是比较少的。
