let num1=8
let num2 = 4
document.getElementById("numb").innerHTML = num1
document.getElementById("number").innerHTML= num2

let sumEL = document.getElementById("halo")
function add(){
    let result = num1 + num2
    sumEL.textContent = "sum: " + result
}
function subtract(){
    let result = num1 - num2
    sumEL.textContent = "sum: " + result
}
function multiply(){
    let result = num1*num2
    sumEL.textContent = "sum: " + result
}
function divide(){
    let result = num1 / num2
    sumEL.textContent = "sum: " + result
}