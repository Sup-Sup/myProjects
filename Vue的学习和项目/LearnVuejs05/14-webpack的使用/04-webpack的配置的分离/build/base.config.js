const path = require('path')
const { userInfo } = require('os')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry:'./src/main.js',
  output:{
    // 输出 -- 拼接到当前目录下(_dirname)的 ../dist 文件夹下
    path:path.resolve(__dirname,'../dist'),
    filename: 'bundle.js',
    // all thing that relate to picture url ,which  is going to add 'dist/'
    // publicPath:'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 9999,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  resolve: {
    // extensions -- 在开发中，文件后缀名，可省略不写
    extensions: ['.js','.css','.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    // 会出现在bundle.js 文件中的第一行
    new webpack.BannerPlugin('最终版权归超琦所有！！！'),
    // HtmlWebpackPlugin 插件 -- 自动生成一个index.html文件（可以指定模板来生成）
    // 此外，将打包到js文件，自动通过script标签插入到body中
    new HtmlWebpackPlugin({
      template:'index.html'
    }),
    // 压缩js文件 丑化 
    // new UglifyjsWebpackPlugin(),
  ],
  // devServer: {
  //   contentBase: './dist',   //  指定为dist文件夹提供本地服务，默认是根目录
  //   inline: true    //是否页面实时刷新
  // }
}