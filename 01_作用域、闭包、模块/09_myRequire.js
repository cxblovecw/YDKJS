//@ts-nocheck
const path=require('path')
const fs=require('fs')
const myModule=myRequire('./08_myModule.js')
function myRequire(module) {
  let filename = path.join(__dirname, module);
  let content = fs.readFileSync(filename, 'utf8');
  return new Function(content+'\n return myExports')()
}
console.log(myModule.name)
myModule.run();