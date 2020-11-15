function t1(){
  console.log(this)
}
// new > 显式绑定>隐式绑定
const t2=t1.bind({name:'marco'})
new t2();

// 如何判断
// 1.先看是否使用new关键字 
// 2.是否显式绑定
// 3.是否由某个对象调用
// 4.以上都不满足 则使用默认绑定 严格模式下绑定undefined