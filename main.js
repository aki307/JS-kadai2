let fizz = document.getElementById('num1');
let buzz = document.getElementById('num2');
let button = document.getElementById('button-execution');
let textbox_element = document.getElementById('textbox');
let newElement = document.createElement('div');
let displayNumber = '';

function calNum(fizzValue, buzzValue) {
  for (let i = 1; i < 100; i++) {
    if (i % fizzValue === 0 && i % buzzValue === 0) {
      displayNumber += `<p>fizzBuzz:${i}</p>`;
    }
    else if (i % fizzValue === 0) {
      displayNumber += `<p>fizz:${i}</p>`;
    }
    else if (i % buzzValue === 0) {
      displayNumber += `<p>buzz:${i}</p>`;
    }
  }
  textbox_element.insertAdjacentHTML('afterbegin', displayNumber);
}
button.addEventListener('click', () => {
  displayNumber = '';
  textbox_element.innerHTML = "";
  let fizzValue = fizz.value;
  let buzzValue = buzz.value;
  let valiFizz = isNaN(fizzValue);
  let valiBuzz = isNaN(buzzValue);
  if (valiFizz || valiBuzz) {
    newElement.textContent = 'エラーです';
    textbox_element.appendChild(newElement);
  }
  else if (fizzValue == '' || buzzValue == '') {
    newElement.textContent = 'エラーです';
    textbox_element.appendChild(newElement);
  }
  else {
    calNum(fizzValue, buzzValue);
  }

});
