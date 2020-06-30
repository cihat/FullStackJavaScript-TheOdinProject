//Script will be written here
const buttons = document.querySelector("#buttons");
const numberButtons = buttons.querySelectorAll(".number");
const operatorButtons = buttons.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".backspaca");
const displayExpression = document.querySelector("#expression");
const displayResult = document.querySelector("#result");
const equalButton = document.querySelector(".equal");

let lastVal,numVal = 0, values = [] , operations = [] , calculated =0;

operatorButtons.forEach(button => button.addEventListener('click', clicked));
numberButtons.forEach(button => button.addEventListener('click', clicked));
clearButton.addEventListener('click', clicked);
backspaceButton.addEventListener("click", clicked);
equalButton.addEventListener("click", clicked);
window.addEventListener('keydown', function(e) {
  const key = document.querySelector(`button[data-key='${e.keyCode}']`);
  key.click();
});

function add(...arr) {
  return arr.reduce((total, current) => total += current);
}
function sub(...arr) {
  return arr.reduce((total, current) => total -= current);
}
function mul(...arr) {
  return arr.reduce((total, current) => total *= current);
}
function div(...arr) {
  return arr.reduce((total, current) => total /= current);
}