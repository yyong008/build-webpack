const HappyPack = require('happypack')

module.exports = {
  plugins: [
    new HappyPack({
      id: 'vue',
      loader: [{
        loader: 'vue-loader',
        options: require('./vue-loader.conf')
      }]
    }),
    new webpack.DllReferencePlugin({
      mainfest: require('../src/dll/ui-mainfest.json')
    }),
    new webpack.DllReferencePlugin({
      mainfest: require('../src/dll/vue-mainfest.json')
    })
  ]
}