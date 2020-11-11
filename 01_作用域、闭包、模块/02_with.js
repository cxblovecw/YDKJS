//@ts-nocheck
var obj={
  a:1,
  b:2,
}

with (obj){
  a=2;
  b=4;
}
console.log(obj.a,obj.b)