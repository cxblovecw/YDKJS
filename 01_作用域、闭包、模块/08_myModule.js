let myModules=(function(){
  let myExports={};
  // 编写代码位置
  let name='marco';
  function run(){
    console.log('跑步')
  }
  myExports.name=name;
  myExports.run=run;
  // 编写代码结束
  return {
    myExports:myExports
  };
})();
let myExports=myModules.myExports;
