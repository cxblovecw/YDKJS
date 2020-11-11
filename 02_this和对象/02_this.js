function test(value){
  console.log(value)
  // 默认this指向的是全局作用域
  console.log(this)
}


// test();                     // 默认情况下
test.bind(test,[1,2,3,4,5])(); // 使用bind、call或apply 将其this修改为指定对象