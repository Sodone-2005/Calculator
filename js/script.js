let expression = '';
let result = '';
let operator = '';
let firstNumber = '';
let secondNumber = '';

function updateScreen(value) {
    document.getElementById('screen').innerText = value;
}

function cancelTOT() {
    expression = '';
    updateScreen('');
}

function cancel() {
    expression = expression.slice(0, -1);
    updateScreen(expression);
}

function appendNumber(number) {
    expression += number;
    updateScreen(expression);
}

function setOperator(op) {
    if (expression) {
        firstNumber = expression;
        operator = op;
        expression = '';
    }
}

function calculate() {
    if (firstNumber && operator && expression) {
        secondNumber = expression;
        switch (operator) {
            case '+':
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case '-':
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case '*':
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case '/':
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
        }
        updateScreen(result);
        expression = result.toString();
        firstNumber = '';
        operator = '';
    }
}

function dot() {
    if (!expression.includes('.'))
        appendNumber('.');
}

function negate() {
    if (expression) {
        if (expression.startsWith('-'))
            expression = expression.slice(1);
        else
            expression = '-' + expression;
        updateScreen(expression);
    }
}