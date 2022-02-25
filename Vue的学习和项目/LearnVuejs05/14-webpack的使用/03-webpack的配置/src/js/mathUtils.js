
function add(a,b){
  return a + b;
}

function mul(a,b){
  return a*b;
}

// commonJS的模块化规范，导出写法 模块-导出
module.exports ={
  add,
  mul
}