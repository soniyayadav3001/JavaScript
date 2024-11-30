console.log("hellooo")
let fs = require('fs')
fs.writeFileSync('index.html', "hiii")
let data = fs.readFileSync('index.html')
console.log(data.toString())

fs.unlinkSync('index.html')
