
var name = '小明';
var flag = true;
function sum(a,b){
  return a + b
} 

if(flag){
  console.log(sum(20,30));
}

// 1.导出方式一 : 先正常的写好，然后导出，这是比较好的一种方式
export{
  flag,
  sum
}

// 2.导出方式二es6的写法；

export let age = 18;
export let height = 188;

// 3.导出函数/类
export function sub(a,b){
  return  a-b;
}

export class person{
  run(){
    console.log('自由自在，敢爱敢恨，勇敢闯一闯，哪怕有太多大浪，也会有默契的目光');
  }
}

// 4.export default 之前都是导出啥，引入的咋用 --- 现在导出了 ，名字让你取 - 随便取
//                      default只能有一个
// const address = '宁都';
// export default address;

export default function message(info){
  console.log(info);
}

