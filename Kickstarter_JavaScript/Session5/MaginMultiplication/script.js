// getting the elements from our HTML
const calculateButton = document.getElementById('calculateButton');
        const resultElement = document.getElementById('result');

// adding our event listener
// the button click triggers our function
        calculateButton.addEventListener('click', function() {
            const number1 = document.getElementById('number1').value;
            const number2 = document.getElementById('number2').value;

          // if / else statement to check whether either of the numbers entered is empty / isn't a number! This is what Nan means. 
          // else, multiply the two numbers.
            if (isNaN(number1) || isNaN(number2)) {
                resultElement.textContent = 'Please enter valid numbers!';
            } else {
                let result = number1 * number2;
                resultElement.textContent = 'Answer: ' + '✨' + result + '✨';
            }
        });

const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', function()
  {
    number1.value = 0;
    number2.value = 0;
  });
