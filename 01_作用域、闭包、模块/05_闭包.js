// 闭包
function outter(){
  const a=10;
  function inner(){
    console.log(a)
  }
  return inner;
}

let result=outter();
result();

// 输出了5个5 因为var使用的是var定义的 作用域是全局的
// 可改为let定义 则只在{}中有效
// for(let i=1;i<=5;i++){
//   setTimeout(function(){
//     console.log(i)
//   },i*1000)
// }

// 可以用立即执行函数包裹 并在函数中重新定义一个变量接收外部的var定义的变量
// 由于函数中即便使用var定义 作用域也是函数体内 所以可以解决问题
// for(var i=1;i<=5;i++){
//   (function(){
//     var j=i;
//     setTimeout(function(){
//       console.log(j)
//     },j*1000)
//   })()
// }

// 弊端：由函数返回闭包 因此函数没有执行 则没有作用域和闭包
let result2=(function (){
  const a=10;
  function iife(){console.log('使用IIFE立即执行函数 使得函数直接执行并返回闭包','a',10)}
  return iife;
})();
result2();