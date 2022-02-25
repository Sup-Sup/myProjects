
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

// 对两个文件进行合并  base.config --- 当前文件
module.exports = webpackMerge(baseConfig,{
  plugins: [
    new UglifyjsWebpackPlugin(),
  ]
})


