let calcProcess = localStorage.getItem('calcProcess') || '';displayCalculationResult();

function calculation (input) {
  calcProcess += input

  displayCalculationResult();

  localStorage.setItem('calcProcess', calcProcess);
}

function displayCalculationResult () {
  document.querySelector('.js-solution')
    .textContent = calcProcess || '0';

}

function calculate() {
  try {
    calcProcess = eval(calcProcess).toString(); 
    localStorage.setItem('calcPrcocess', currentCalculation);
  } catch (error) {
    currentCalculation = 'Error';
  }
  
  displayCalculationResult();
}

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    
    if (buttonText === '=') {
      calculate();
    } else if (buttonText === 'CL') {
      console.log(buttonText)
      calcProcess = '';
    } else {
      calcProcess += buttonText;
    }

    displayCalculationResult();
  });
});


displayCalculationResult();
console.log(calcProcess)
