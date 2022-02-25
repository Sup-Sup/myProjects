

// 在实际写代码时，注意require后跟的文件，这样在这个文件中就能知道那个文件被使用了

// commonJS 的传入，commonJS是请求整个文件exports导出的东西，而后要什么，自己拿
const {add , mul} = require('./mathUtils')

console.log(add(15,60));
console.log(mul(4,5));

// es6的导入

import {name,age,height} from './es6的模块化测试'
console.log(name+age+height);