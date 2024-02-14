function getNum1Num2() {
  let num1El = document.getElementById("num-1");
  let num1 = parseInt(num1El.value)
  let num2El = document.getElementById("num-2");
  let num2 = parseInt(num2El.value)
  return [num1, num2]
}
let res = document.getElementById("res-operation");

function Add() {
  let [num1,num2] = getNum1Num2()
  console.log(num1)
  console.log(num2)
  res.innerText = num1 + num2
}

function Sub() {
  let [num1,num2] = getNum1Num2()
  res.innerText = num1 - num2;
}

function Div() {
let [num1,num2] = getNum1Num2()
    res.innerText = num1 / num2;
}

function Mul() {
    let [num1,num2] = getNum1Num2()
    res.innerText = num1 * num2;
}
