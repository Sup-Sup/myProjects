// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render:function(createElement){
    // 1.普通用法：createElement('标签',{标签属性},['内容'])
  //   return createElement('h2',
  //   {class:"box"},
  //   ['今天有点凉喔',
  //   createElement('button',['按钮'])])
  // 传入组件对象
  return createElement(App);
  }
  
})

