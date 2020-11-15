function test(value,value2){
  console.log(this,value,value2)
}

// 相同：改变函数this的指向 第一个参数为this要指向的对象 都可以接收参数
// 不同：
// 1.bind为改变this指向 返回一个方法 并不会马上调用 call和apply则在改变完立即调用
// 2.bind和call可以接收多个参数 并传递给函数
// 3.apply只接收一个数组 然后以剩余参数的形式传递给函数 即拆分数组传入 可用于Math.max这种情况

// 注意:如果传入null或者undefined 则绑定失败 还是默认绑定
test.bind({type:'bind'},[1,2,3,4],5)();
test.call({type:'call'},[1,2,3,4],5);
test.apply({type:'apply'},[1,2]);

// 
console.log(Math.max.bind({},[66,10,99,44])())
console.log(Math.max.call({},[66,10,99,44]))
console.log(Math.max.apply({},[66,10,99,44]))

