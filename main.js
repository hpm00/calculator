

// keyboard 
//const keysPressed = document.querySelector(`button[data-key="${e.keyCode}"]`);


const numberButtons = document.getElementsByClassName('number');
Array.from(numberButtons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let number = `${(e.target.innerText)}`;
        displayNumber(number);
    })
});

// populate the display
const display = document.getElementById('calculator-display');

function displayNumber(number) {
    display.textContent += number;
}

const resetBtn = document.getElementById('AC');
resetBtn.addEventListener('click', resetDisplay);


// negative/positive button

// percent button

// decimal button
const decimalBtn = document.getElementById('decimal');
decimalBtn.addEventListener('click', makeDecimal);

function makeDecimal(number) {
    let string = display.textContent;
    if (string.includes(".")) {
        decimalBtn.disabled = true;
    }
    else {
        string += '.'
    };

};
makeDecimal();


// reset display
function resetDisplay() {
    const display = document.getElementById('calculator-display');
    display.innerText = '';
};

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
    return num1 / num2
}
division(num1, num2);

function multiply(num1, num2) {
    return num1 * num2
}
multiply();