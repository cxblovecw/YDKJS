// 1.基本数据类型
// string number boolean null undefined object symbol


// 2.内置对象
// 
// String Number Boolean Object Function Array Date RegExp Error
// 内置对象使用new关键字后创建出来的都是object 
// 如果没有用new 则不一定

console.log(new Date())
console.log(Date())

console.log(typeof String(123))
console.log(typeof(new String(123)))