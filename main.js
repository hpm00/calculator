// Global Variables
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;

// DOM Elements
const currentScreenOperation = document.getElementById('current-screen');
const previousScreenOperation = document.getElementById('previous-screen');
const AC = document.getElementById('AC');
const plusMinus = document.getElementById('negative-positive');
const percentButton = document.getElementById('percent');
const operatorButtons = document.getElementsByClassName('operator');
const numberButtons = document.getElementsByClassName('number');
const decimalButton = document.getElementById('decimal');
const equalButton = document.getElementById('equal');

Array.from(numberButtons).forEach((button) => {
    button.addEventListener('click', (e) => {appendNumber(button.textContent)});
});

function appendNumber(number) {
    if (currentScreenOperation.textContent === "0") 
    {resetScreen();}
    currentScreenOperation.textContent += number;
};

function resetScreen() {
    currentScreenOperation.textContent = '';
};

AC.addEventListener('click', clearAll);

function clearAll() {
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
    currentScreenOperation.textContent = "0";
    previousScreenOperation.textContent = '';
};

decimalButton.addEventListener('click', addDecimal);

function addDecimal() {
    if (currentScreenOperation === "") 
    {currentScreenOperation.textContent === "0"}
    else if (currentScreenOperation.textContent.includes("."))
    {return;}
    else {currentScreenOperation.textContent += "."}
}

plusMinus.addEventListener('click', getPlusMinus);

function getPlusMinus() {
    if (currentScreenOperation.textContent === "")
    {return};
    if (currentScreenOperation.textContent.indexOf("-") === 0)
    {currentScreenOperation.textContent = currentScreenOperation.textContent.substring(1)} // work on this
    if (currentScreenOperation.textContent.indexOf(".") === -1 && currentScreenOperation.textContent === "0") 
    {currentScreenOperation.textContent = "0"}
    else {currentScreenOperation.textContent = "-" + currentScreenOperation.textContent}
};

//percentButton.addEventListener("click", getPercent);

//function getPercent() {



//};

Array.from(operatorButtons).forEach((button) => {
    button.addEventListener('click', (e) => {getOperation(button.textContent)})
});

function getOperation(operator) {
    if (currentOperation !== null) {calculate()}
    firstOperand = currentScreenOperation.textContent;
    currentOperation = operator;
    //previousScreenOperation.textContent = `${firstOperand} ${currentOperation}`;
    currentScreenOperation.textContent = '';
};

equalButton.addEventListener('click', calculate);

function calculate() {
    if (currentOperation === null) {return}
    secondOperand = currentScreenOperation.textContent;
    currentScreenOperation.textContent = operate(currentOperation, firstOperand, secondOperand);
    //previousScreenOperation.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null;
};

function add(a, b) {
    return a + b
  }
  
  function subtract(a, b) {
    return a - b
  }
  
  function multiply(a, b) {
    return a * b
  }
  
  function divide(a, b) {
    return a / b
  }

  function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)

  switch (operator) {
    case '+':
      return add(a, b)
    case '-':
      return subtract(a, b)
    case 'X':
      return multiply(a, b)
    case '/':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
    }
};