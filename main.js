const display = document.getElementById('calculator-display');

let value = '';
memory = '';
operation = 0;

// keyboard 
//const keysPressed = document.querySelector(`button[data-key="${e.keyCode}"]`);
// translate keys 

const negPosBtn = document.getElementById('negative-positive');
negPosBtn.addEventListener('click', getNegPost);

// negative/positive button
function getNegPost(number) {
    if (value === '' || value === 0) {
        return;
    }
    else {
        value *= -1
    }
    display.textContent = value;
};
getNegPost();


// display numbers
const numberButtons = document.getElementsByClassName('number');
Array.from(numberButtons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let number = `${(e.target.textContent)}`;
        displayNumber(number);
    })
});


// populate the display

function displayNumber(number) {
    value += number; 
    display.textContent = value; 
}

const resetBtn = document.getElementById('AC');
resetBtn.addEventListener('click', resetDisplay);


// percent button
const percentBtn = document.getElementById('percent');
percentBtn.addEventListener('click', getPercent);

function getPercent(number) {
    if (value == '' || value === 0) {
        return;
    }
    else {
       value /= 100;
    }
    display.textContent = value;
};
getPercent();


// decimal button
const decimalBtn = document.getElementById('decimal');
decimalBtn.addEventListener('click', addDecimal);

function addDecimal() {
    if (value === '') {
        return;
    }
    else if (value.indexOf(".") === -1) {
        value += '.'
    }
    else {
        decimalBtn.disabled = true;
    };
    display.textContent = value;
};
addDecimal();


// reset display
function resetDisplay() {
    const display = document.getElementById('calculator-display');
    value = '';
    memory = '';
    operation = 0;

    display.textContent = value;
};



const operatorButtons = document.getElementsByClassName('operator'); 



let num1 = '';
let num2 = '';
// call this function based on what the operator is
function operator(operator, num1, num2) {

    switch(operator) {
        case '+':
            return addition(num1, num2);
        case '-': 
            return subtraction(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '/':
            if (num2 === 0) {
                return 'null'
            }
            else {
                return division(num1, num2);
            };
    };   
};
operator();


// simple math functions
function addition(num1, num2) {
    return num1 + num2;
};
addition();

function subtraction(num1, num2) {
    return num1 - num2
};
subtraction();

function division(num1, num2) {
    if (num2 === 0) {
        return 'null'
    }
    else {
        return num1 / num2;
    };
}
division(num1, num2);

function multiply(num1, num2) {
    return num1 * num2
}
multiply();

window.onload = () => {
    resetDisplay();
}