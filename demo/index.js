// 断点调试入口
const acorn = require("../acorn")

// console.log(acorn)

const a = `if(a===1){
   var a = 43
}` 
const token = acorn.tokenize(a)()
console.log(token)

const parse = JSON.stringify(acorn.parse(a))

console.log(parse)


