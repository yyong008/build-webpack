module.exports = {
  '/': {
    target: 'http://m.weio.cn',
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: {
      '^/comments': '/api/comments'
    },
    headers: {
      'Cookie': 'sdfsdfsfsdfsdf'
    }
  }
}