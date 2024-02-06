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
let deleteItem = document.querySelector('#deleteItem');

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
        screen.textContent = `${num1} ${currentOperation ? currentOperation + ' ': ' '}${num2}`;
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (isOperatorClicked && num2) {
            runOperation(parseFloat(num1), parseFloat(num2));
            num1 = result.toString();
            screen.textContent = num1;
            num2 = '';
        }
        currentOperation = e.target.textContent;
        isOperatorClicked = true;
        screen.textContent = `${num1} ${currentOperation} ${num2}`.trim();
    });
});

deleteItem.addEventListener('click', (e) => {
    let newNum = [];
    if (screen.textContent === num1) {
        newNum = Array.from(num1);
        newNum.pop();
        num1 = newNum.join('');
        screen.textContent = num1;
    } else  if (screen.textContent === num2) {
        let newNum = Array.from(num2);
        newNum.pop();
        num2 = newNum.join('');
        screen.textContent = num2
    } else {
        result = result;
    }
});

equals.addEventListener('click', (e) => {
    if (num1 && num2 && currentOperation) {
        runOperation(parseFloat(num1), parseFloat(num2));
        num1 = result.toString();
        num2 = '';
        isOperatorClicked = false;
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
