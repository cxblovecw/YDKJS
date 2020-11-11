// 变量提升 也就是使用var或者函数声明的时候 会被放在代码的最前面进行
// 注意:var只有声明是提升了 赋值的操作并没有 所以a的值是undefined
console.log(a)    // undefined 
// console.log(b) // 使用了let进行声明 let不存在变量提升 const同理
// 函数声明本身就包含函数体 所以可以正常执行
test();
// 函数表达式和 var let const同理
// 使用var则函数是undefined let或const直接报错
// test2()   
var a=10;
let b=20;

function test(){
  // 优先级关系
  // 1.函数声明
  // 2.var变量提升
  // 因此在函数声明中使用var提升后的变量为undefined
  console.log(a)
  console.log('测试')
}

var test2=function(){
  console.log('测试2')
}
