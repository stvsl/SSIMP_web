const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 允许server.ssimp.stvsljl.com跨域
   devServer: {
    proxy: {
      '/api': {
        target: 'http://server.ssimp.stvsljl.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
