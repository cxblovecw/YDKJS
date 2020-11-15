function foo(a){
  console.log(this)
  this.a=a;
}

// 使用new关键字 会将this绑定为函数本身
var bar= new foo(2);
console.log(bar.a)