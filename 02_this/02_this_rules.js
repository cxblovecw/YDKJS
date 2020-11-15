console.log(this)  // JS文件中的this指向的是exports
// 绑定规则
// 1. 默认绑定
function t1(){
  // 非严格模式下 默认绑定全局global对象
  console.log(this)
}
t1(); // global

function t2(){
  // 严格模式下 绑定的是undefined
  "use strict";
  console.log(this)
}
t2();  // undefined

function t3(){
  console.log(this)
}

// 2. 隐式绑定
const obj={
  t3
}
obj.t3(); // obj

// 3.隐式绑定丢失
// 说白了 就是当函数被引用（赋值） 而不是直接调用时 会丢失this的绑定
const t4=obj.t3;
t4(); // global

// 将函数作为回调函数 其实也就是被引用 因此丢失this 从而绑定的是global
function t5(fn){
  fn()
}
t5(obj.t3)

// 4.显示绑定
// 使用apply bind call绑定