let screen = document.querySelector('#screen');
let buttons = document.querySelectorAll('.inputValue');
let operators = document.querySelectorAll('.operator');
let clear = document.querySelector('#clear');
let equals = document.querySelector('.equals');
let currentOperation = null;
let num1 = '';
let num2 = '';
let result = 0;
let isOperatorClicked = false;

screen.style.color = '#d80f89';

function runOperation(num1, num2) {
    switch(currentOperation) {
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
    }
    screen.textContent = result;
};

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const inputValue = e.target.textContent;
        if (!isOperatorClicked) {
            num1 += inputValue;
            screen.textContent = num1;
        } else {
            num2 += inputValue;
            screen.textContent = num2;
        }
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (!isOperatorClicked) {
            currentOperation = e.target.textContent;
            isOperatorClicked = true;
            screen.textContent = num1 + ' ' + currentOperation;
        }
    });
});

equals.addEventListener('click', (e) => {
    if (num1 && num2 && currentOperation) {
        runOperation(parseInt(num1), parseInt(num2))
        result.toString();
    }
});

clear.addEventListener('click', (e) => {
    currentOperation = null;
    num1 = '';
    num2 = '';
    result = 0;
    isOperatorClicked = false;
    // clear screen input
    screen.textContent = '';
});
