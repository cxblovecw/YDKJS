// JS文件中this指向的是module.exports
this['name']="marco";
exports.age=20;
console.log(this)
console.log(exports)
console.log(module.exports)

// global对象是 globalThis 
console.log(globalThis)