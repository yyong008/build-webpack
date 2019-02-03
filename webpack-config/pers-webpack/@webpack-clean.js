exports.clean = path => ({
  plugins: [ new CleanWebpackPlugin([path])]
})