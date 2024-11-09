const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value >= 0 && value <= 9 || value === '.') {
            currentInput += value;
            display.value = currentInput;
        } else if (value === 'C') {
            currentInput = '';
            operator = '';
            display.value = currentInput;
        } else if (value === '=') {
            if (operator && currentInput) {
                const result = evaluateExpression(currentInput, operator);
                display.value = result;
                currentInput = result;
                operator = '';
            }
        } else {
            operator = value;
            display.value += ` ${operator} `;
        }
    });
});

function evaluateExpression(expression, operator) {
    const numbers = expression.split(operator);
    const num1 = parseFloat(numbers[0]);
    const num2 = parseFloat(numbers[1]);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }
}