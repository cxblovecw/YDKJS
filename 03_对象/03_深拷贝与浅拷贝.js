// 浅拷贝
// 1.平常的赋值操作就是浅拷贝 只会拷贝引用 当原数据发生改变时会跟随改变
let info={
  name:'marco',
  age:20
}
let person={
  sex:'man',
  info
}

let p1=person;
person.sex='women';
console.log(p1)

let num=10;
let num2=num;
num=20;
console.log(num)

// 2. Object.assign()
// assign对于第一层的数据是进行深拷贝 而再里层的 就是浅拷贝
const p2=Object.assign({},person);
person.sex='男';  // 深拷贝 不影响
person.info.name='ssx'; // 浅拷贝 影响
console.log(p2)