let arr = [1, 2, 3, "riya", "shubhi", true, false]

function getNum() {
   let result = []
  for (let i of arr) {
     if (typeof i === "string") {
result.push(i)
     }
  }
  return result
 }
 let getdata = getNum()
 console.log(getdata)
