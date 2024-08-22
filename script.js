// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    let currentInput = '';
    let operator = '';
    let firstValue = '';
    let secondValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.value;

            if (value === 'C') {
                // Clear the display
                currentInput = '';
                operator = '';
                firstValue = '';
                secondValue = '';
                display.innerText = '0';
            } else if (value === '=') {
                // Calculate the result
                if (firstValue !== '' && operator !== '' && currentInput !== '') {
                    secondValue = currentInput;
                    display.innerText = calculate(firstValue, secondValue, operator);
                    currentInput = display.innerText;
                    operator = '';
                }
            } else if (this.classList.contains('operator')) {
                // Handle operator
                if (currentInput !== '') {
                    operator = value;
                    firstValue = currentInput;
                    currentInput = '';
                }
            } else {
                // Handle number input
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });

    function calculate(first, second, operator) {
        let result = 0;
        first = parseFloat(first);
        second = parseFloat(second);

        switch (operator) {
            case '+':
                result = first + second;
                break;
            case '-':
                result = first - second;
                break;
            case '*':
                result = first * second;
                break;
            case '/':
                result = first / second;
                break;
            default:
                break;
        }

        return result.toString();
    }
});
