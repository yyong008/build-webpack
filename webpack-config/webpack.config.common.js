const  partLoadCSS = require('./pers-webpack/@webpack-loadCSS')
const partLoadJS = require('./pers-webpack/@webpack-loadJS')

const HTMLTITLE = 'webpack pages'
const PATHS = {
  app: path.join(__dirname, "src"),
  build: path.join(__dirname, "dist")
}

exports.commonConfig = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        title: HTMLTITLE
      })
    ]
  },
  partLoadCSS.loadCSS(),
  partLoadJS.loadJS({ include: PATHS.app})
])