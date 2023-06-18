let fizz = document.getElementById('num1');
let buzz = document.getElementById('num2');
let button = document.getElementById('button-execution');
let textbox_element = document.getElementById('textbox');
let newElement = document.createElement('div');
let displayNumber = '';
let fizzNumber = [];
let buzzNumber = [];
let fizzBuzzNumber = [];
let calNumber = [];
let loopCount = 0;

function GCD(A, B) {
  if (B === 0) return A;
  return GCD(B, A % B);
}

function campareFunc(a, b) {
  return a - b;
}

function calNum(fizzValue, buzzValue) {
  let fizzLoopCount = Math.floor(99 / fizzValue);
  let buzzLoopCount = Math.floor(99 / buzzValue);
  if (fizzLoopCount <= buzzLoopCount) {
    loopCount = buzzLoopCount;
  }
  else {
    loopCount = fizzLoopCount;
  }

  let leastCommonMultiple = Math.floor(fizzValue / GCD(fizzValue, buzzValue)) * buzzValue;

  let fizzBuzzLoopCount = Math.floor(99 / leastCommonMultiple);
  for (let i = 1; i < fizzBuzzLoopCount; i++) {
    fizzBuzzNumber[i] = i * leastCommonMultiple;
  }
  for (let i = 1; i <= fizzLoopCount; i++) {
    fizzNumber[i] = i * fizzValue;
  }
  for (let i = 1; i <= buzzLoopCount; i++) {
    buzzNumber[i] = i * buzzValue;
  }
  for (let i = 0; i <= loopCount; i++) {
    let fizzIndex = 2 * i - 2;
    let buzzIndex = 2 * i - 1;
    calNumber[fizzIndex] = fizzNumber[i];
    calNumber[buzzIndex] = buzzNumber[i];
  }
  calNumber.sort(campareFunc);
  let set = new Set(calNumber);
  let setNumber = Array.from(set);
  setNumber.forEach((number) => {
    if (number % leastCommonMultiple == 0) {
      displayNumber += `<p>fizzBuzz:${number}</p>`;
    }
    else if (number % fizzValue == 0) {
      displayNumber += `<p>fizz:${number}</p>`;
    }
    else if (number % buzzValue == 0) {
      displayNumber += `<p>buzz:${number}</p>`;
    }
  });
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
