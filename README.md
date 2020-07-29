# build-webpack

以 webpack 构建 react，vue 项目

## 使用 nodemon 监听 webpack 配置项

我们在开发的时候，有时候需要改进 webpack 的配置，这个时候我们使用 nodemon 来监听这些配置项的变化

简单的 nodemon 的命令行配置，结合 webpack 如何配置在一起：

```json
"script": {
  "start": "nodemon --watch webpack.config.js --exec \"webpack-dev-server --mode production\""
}

```

e

## webpack 配置方法

> 将一些路径配置成常量， 并且单独拿出来，这样更加的便于维护！，一切以可维护性为目标的处理！

1.一个文件配置开发和生产环境的 webpack 项 2.将 webpack 配置项分成基本配置，开发配置，生成配置

```bash
.
└── config
    ├── webpack.common.js
    ├── webpack.development.js
    ├── webpack.parts.js
    └── webpack.production.js
```

3.将 webpack 的配置项模块化，模块化的配置的各个配置项！！！

```bash
.
└── config
    ├── parts
    │   ├── devserver.js
    ...
    │   ├── index.js
    │   └── javascript.js
    └── ...
```

> 总体的配置，我们使用 webpack-merge 来进行 webpack 的配置项。

## 基本安装

- webpack

```bash
npm i webpack webpack-cli webpack-merge webpack-dev-server -D
```

- babel 部分

```bash
npm i babel-loader @babel/core @babel/preset-env @babel/preset-react
```

- react 部分

```bash
npm i react react-dom react-redux react-router-dom react-saga react-thunk -S
```

- vue 相关

```bash
npm i vue vue-router vuex vuepress
```

- 请求相关

```bash
npm i axios -D
```

- html 部分

```bash
npm i -D html-webpack-plugin
```

- 清理-相关

```bash
npm i -D clean-webpack-plugin
```

- css 相关

```bash
npm i -D mini-css-extract-plugin # 提取css
npm i -D style-loader css-loader postcss-loader autoprefixer
npm i -D less sass stylus less-loader sass-loader stylus-loader node-sass
```

- 文件相关

```bash
npm i -D url-loader file-loadr img-loader
```

- 优化相关

- ts 相关

```bash
npm i -D typescript ts-loader awesome-typescript-loader source-map-loader
```

- eslint 相关

- commit 相关

- angluar 相关
