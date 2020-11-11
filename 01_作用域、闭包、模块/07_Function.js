// Function 构造函数用于定义一个可以执行字符串代码的函数 
// 最后一个参数为 字符串代码 前面的所有参数为函数接收的参数
const func=new Function('name','age',`
  console.log(name,age);
`)

func('marco',20)