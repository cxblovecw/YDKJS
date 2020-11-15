"use strict"
// 在非严格模式下 如果是修改已有属性的property 那么只有效果 没有报错提示
let obj={
}
// 获取属性的描述 
// value: 'marco',    // 值
// writable: true,    // 是否可以修改
// enumerable: true,  // 是否可枚举 也就是 是否可以遍历获取 普通获取依旧可以
// configurable: true // 是否可以配置 也就是使用defineProperty添加配置 也无法删除 可以将 writable从true设置为false 但是不能从false设置为true

// 注意：如果这个属性本身就已经存在了 那么非严格编译的时候不会有提示
// 若这个属性是defineProperty定义出来的 那么编译时就会报错 
Object.defineProperty(obj,'name',{
  value:'marco',
  writable:false,  
  configurable:false, 
  enumerable:false
})
// 注意：定义属性的吗
Object.defineProperty(obj,'name',{
  // enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(obj,'name'))
console.log(obj)
// obj.name='polo';
// delete obj.name;
console.log(obj)
