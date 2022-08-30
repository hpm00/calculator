
// populate the display
function display() {

};
display();

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