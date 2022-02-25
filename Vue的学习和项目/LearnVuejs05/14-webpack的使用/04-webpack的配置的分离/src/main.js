

// 在实际写代码时，注意require后跟的文件，这样在这个文件中就能知道那个文件被使用了

// 1.commonJS 的传入，commonJS是请求整个文件exports导出的东西，而后要什么，自己拿
const {add , mul} = require('./js/mathUtils')

console.log(add(15,60));
console.log(mul(4,5));

// 2.es6的导入

import {name,age,height} from './js/es6的模块化测试'
console.log(name+age+height);

// 3.css的导入 -- 依赖
require('./css/test.css')

// 4.less的导入 -- 依赖 
require('./css/special.less')

// 5.vue的引入 -- 依赖


import Vue from 'vue'  //可以使用vue
// import App from './vue/app'
import App from './vue/App.vue'

new Vue({
  // 如果同时存在el和template，那么template中的内容将会替换掉el对应的东东

  el: '#app',   //挂载
  template:'<App/>',  // 使用
  data: {
    
  },
  components: {
    App   // 注册
  }
})
