

import {sum, person} from "./aaa.js"


let name = '小红' ;
let flag = false ;
if(!flag){
  console.log(sum(55,55));
}


import {age , height,sub} from "./aaa.js"


console.log(age+' -- '+height+' - '+sub(50,2));

const p = new person();
p.run();


import addr from "./aaa.js"


addr('晚上好');


// 导入的变量较多时，使用一下的导入方式 aaa是取得名字,将aaa.js文件中的export的内容都导入进来
import * as bbb from "./aaa.js"
console.log(bbb.height);
console.log(bbb.flag);