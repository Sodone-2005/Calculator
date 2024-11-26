let expression = '';
let result = '';
let operator = '';
let firstNumber = '';
let secondNumber = '';

function updateScreen(value) {
    document.getElementById('screen').innerText = value;
}

function appendNumber(number) {
    if (expression === result.toString()) {
        expression = '';
    }
    expression += number;
    updateScreen(expression);
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

function one() { appendNumber('1'); }
function two() { appendNumber('2'); }
function three() { appendNumber('3'); }
function four() { appendNumber('4'); }
function five() { appendNumber('5'); }
function six() { appendNumber('6'); }
function seven() { appendNumber('7'); }
function eight() { appendNumber('8'); }
function nine() { appendNumber('9'); }
function zero() { appendNumber('0'); }
function dot() {
    if (!expression.includes('.'))
        appendNumber('.');
}
function plus() { setOperator('+'); }
function minus() { setOperator('-'); }
function times() { setOperator('*'); }
function divided() { setOperator('/'); }
function equal() { calculate(); }
function negate() {
    if (expression) {
        if (expression.startsWith('-'))
            expression = expression.slice(1);
        else
            expression = '-' + expression;
        updateScreen(expression);
    }
}