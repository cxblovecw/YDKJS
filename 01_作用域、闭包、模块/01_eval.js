// 使用 ts-node 可以直接编译ts文件
// 1. npm i ts-node -g
// 2. ts-node file.ts
// 由于公司系统有点麻烦 目前文件还是先使用js

// 全局变量 若是在html文件中 则可以通过window.a的方式访问
let a;
function test(){
  eval('a=10;')
  console.log(a);
}

test();