# env

在这里我们值得区分的是

mode
env

mode 是模式，在 webpack4 中添加的配置项，但是我们一般在 package.json 的 script 的标签。
env 是环境，在 webpack 中添加的配置，一般的是指定当前的环境

## 使用输出函数区分开发环境

问题用什么区分不同的环境？？？

在 webpack 中我们区分开发环境和生产环境： 输出一个函数

### 判断方式

本质上是字符串，区别就是使用 --mode 还是 --env 的字符串，webpack 中介绍的使用的mode 的字符串

```js
"script": {
  "build": "webpack --config webpack.config.js --mode production --env production"
  "dev": "webpack --config webpack.config.js --mode development --env development"
}
```

```js
var config = {
  entry: {
    app: 'app.js'
  }
}
module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    return developmentConfig
  }

  if (argv.mode === 'production') {
    return productionConfig
  }
}
```

经过测试 argv 参数的 keys 值是：

```js
var argv.keys = [ '_',
  'cache',
  'bail',
  'profile',
  'color',
  'colors',
  'mode',
  'env',
  'info-verbosity',
  'infoVerbosity',
  '$0' ]
```

这里特殊的参数： mode/env，两个参数是区分开发环境的关键要素！！

值的注意的是： 这里的环境参数，env和mode 都可通过 scripts 中要运行的参数来确定

mode 为development 的时候 ，我们默认设置 process.env.NODE_ENV 来处理在 DefinePlugin 来设置开发模式。

mode 为 production 的时候， 我们默认设置 process.env.NODE_ENV 来处理在 DefinePlugin 来设置开发模式。
