function step1() {
  setTimeout(() => {
    console.log("Select photo")
  }, 4000)
  
}
function step2() {
  setTimeout(() => {
    console.log("Edit photo")
  }, 4000)
  
}
function step3() {
  setTimeout(() => {
    console.log("Caption")
  }, 4000)

}
function step4() {
  setTimeout(() => {
    console.log("Post")
  },4000)
}

 async function call() {
   await step1()
   await step2()
   await step3()
   await step4()
}
call()
