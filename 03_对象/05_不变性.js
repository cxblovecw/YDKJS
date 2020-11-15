// 1. 通过将writable和configurable设置为false创建出一个真正的常量属性
let obj={};
Object.defineProperty(obj,'CONST_NUM',{
  value:99,
  writable:false,
  configurable:false
})
// obj.CONST_NUM=10; 只读属性 无法修改 并且也无法修改它的writable
console.log(obj.CONST_NUM)

// 2.禁止扩展 无法新增属性 严格模式下会报错
Object.preventExtensions(obj)
obj.sex="man";
console.log(obj)

// 3. 密封Object.seal() 无法新增和删除属性 并且configurable为false 也就是无法配置 但是可以修改已有属性的值
// "use strict"
let obj2={
  name:'marco'
};
Object.seal(obj2)
//无法重新配置
// "use strict"
// Object.defineProperty(obj2,'name',{
//   enumerable:false,
// });  
delete obj2.name;  // 无法删除
obj2.age='10'      // 无法新增
obj2.name='polo'   // 可以修改
console.log('obj2',obj2)

// 4.冻结 freeze 在seal的基础上 加了一个writable:false 
// 无法新增 无法删除 无法修改  无法配置

// 使用Object.create()创建对象
let obj3=Object.create({});
Object.defineProperty(obj3,'name',{
  enumerable:true,
  get(){
    return 'marco';
  },
  set(){}
})
obj3.name='polo'
console.log('obj3',obj3)


// 5.判断存在性 判断某个属性是否在某个对象上
console.log('name' in obj3)
console.log(obj3.hasOwnProperty('name'))

// 6.是否可枚举 
console.log(obj3.propertyIsEnumerable('name'))

// 7.返回所有可枚举的属性
console.log(Object.keys(obj3))

// 8.返回所有属性 无论是否可以枚举
console.log(Object.getOwnPropertyNames(obj3))