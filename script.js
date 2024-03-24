const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
let currentValue = '';
let previousValue = '';
let operation = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (!button.classList.contains('operator')) {
      if (value === '.' && currentValue.includes('.')) return;
      currentValue += value;
      display.textContent = currentValue;
    } else {
      if (operation !== null) {
        const result = operate(parseFloat(previousValue), parseFloat(currentValue), operation);
        display.textContent = result;
        previousValue = result.toString();
        currentValue = '';
      } else {
        previousValue = currentValue;
        currentValue = '';
      }

      operation = value;
    }

    if (value === '=') {
      const result = operate(parseFloat(previousValue), parseFloat(currentValue), operation);
      display.textContent = result;
      currentValue = result.toString();
      previousValue = '';
      operation = null;
    }
  });
});

function operate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'x':
      return a * b;
    case '÷':
      return a / b;
    default:
      return 0;
  }
}