exports.name='箭头函数';
// 注意点:
// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

// 不适用场景
// 1.对象上的方法 使用了箭头函数 this就不会指向该对象 会造成不方便
// 2.需要动态指定this的时候 也不适用箭头函数 因为箭头函数的this是固定的
let f1=()=>{
  console.log('f1',this)
}

f1();

function f2(){
  // 箭头函数在f2中定义 指向f2的this 
  return ()=>{
    console.log('f2',this)
  }
}
f2()()

let f3=()=>{
  return ()=>{
    console.log('f3',this)
  }
}
f3()()

class Test{
  f4=()=>{
    console.log('f4',this)
  }
  f5(){
    console.log('f5',this)
  }
}

let t=new Test();
t.f4()
t.f5()

let obj={
  name:'polo',
  f6:()=>{
    // 此处的this指向了全局的this 因此不方便使用
    console.log(this)
  }
}
obj.f6()

// 更安全的绑定空this  但是对箭头函数无效
obj.f6.bind(Object.create(null))()