

exports.loadFont = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        include,
        exclude,
        use: {
          loader: 'url-loader',
          options: {
            limit: 5000,
            minitype: 'application/font-woff',
            name: './font/[name].[ext]',
            publicPath: '../'
          }
        }
      }
    ]
  }
})