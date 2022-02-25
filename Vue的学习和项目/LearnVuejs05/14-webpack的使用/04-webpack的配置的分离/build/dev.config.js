
const baseConfig = require('./base.config')
const webpackMerge = require('webpack-merge')

// 合并
module.exports = webpackMerge(baseConfig,{
  devServer: {
    contentBase: './dist',   //  指定为dist文件夹提供本地服务，默认是根目录
    inline: true    //是否页面实时刷新
  }
})

