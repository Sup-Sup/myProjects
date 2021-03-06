import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


// // 1.axios 的基本使用
// axios({
//   url: "http://123.207.32.32:8000/home/multidata",
//   // method: 'post'
// }).then(res => {
//   console.log(res);
// })

// axios({
//   url: "http://123.207.32.32:8000/home/data",
//   // 专门对get 请求做的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// 2.axios.all() 发送并请求

// axios.all([
//   axios({
//     url: "http://123.207.32.32:8000/home/multidata"
//   }),
//   axios({
//     url: "http://123.207.32.32:8000/home/data",
//     params: {
//       type: 'sell',
//       page: 5
//     }
//   })
// ]).then(res => {
//   console.log(res);
// })
// 3. 使用全局的axios 和对应的配置进行网络请求 
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// axios.all([
//   axios({
//     url: "/home/multidata"
//   }),
//   axios({
//     url: "/home/data",
//     params: {
//       // 和method -- get 方法相对应，将params 以问号的形式拼接上去
//       //  如果是post -- 那么就要用 data形式了
//       type: 'sell',
//       page: 5
//     }
//   })
// ]).then(axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// // 4. 创建一个对应的 axios 的实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page:1
//   }
// }).then(res => {
//   console.log(res);
// })

// 5.封装request模块

import {request} from './network/request';

// request({
//   url: '/home/data'
// },res => {
//   console.log(res);
// },err => {
//   console.log(err);
// })

// request({
//   baseConfig: {

//   },
//   success: function(res){

//   },
//   failure: function(err){

//   }
// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})