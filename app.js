let numberScreen = document.getElementById("numberScreen");
let equalButton = document.getElementById("equalButton");
let allClearButton = document.getElementById("allClearButton");
let clearButton = document.getElementById("clearButton");
let buffer = "";
let firstBuffer = 0;
let operator = "";
let isSubtraction = false;

const numbers = (value) => {
  numberScreen.value += value;
  buffer += value;
};

const getMode = (number1, number2) => {
  numberScreen.value = parseFloat(number1) % parseFloat(number2);
  return numberScreen.value;
};

const sum = (number1, number2) => {
  numberScreen.value = parseFloat(number1) + parseFloat(number2);
  return numberScreen.value;
};

const substraction = (number1, number2) => {
  numberScreen.value = parseFloat(number1) - parseFloat(number2);
  return numberScreen.value;
};

const multiplication = (number1, number2) => {
  numberScreen.value = (parseFloat(number1) * parseFloat(number2)).toFixed(2);
  return numberScreen.value;
};

const division = (number1, number2) => {
  numberScreen.value = (parseFloat(number1) / parseFloat(number2)).toFixed(2);
  return numberScreen.value;
};

const clearScreen = () => {
  numberScreen.value = "";
  buffer = "";
  firstBuffer = 0;
  operator = "";
};

const clearOne = () => {
  numberScreen.value = numberScreen.value.slice(0, -1);
  buffer = buffer.slice(0, -1);
};

const operators = (value) => {
  switch (value) {
    case "+":
      {
        numberScreen.value += value;
        operator = value;
        firstBuffer += parseFloat(buffer);
        buffer = "";
      }
      break;
    case "-":
      {
        numberScreen.value += value;
        operator = value;
        firstBuffer = parseFloat(buffer);
        buffer = "";
      }
      break;
    case "*":
      {
        numberScreen.value += value;
        operator = value;
        firstBuffer = parseFloat(buffer);
        buffer = "";
      }
      break;
    case "/":
      {
        numberScreen.value += value;
        operator = value;
        firstBuffer = parseFloat(buffer);
        buffer = "";
      }
      break;
    case "%":
      {
        numberScreen.value += value;
        operator = value;
        firstBuffer = parseFloat(buffer);
        buffer = "";
      }
      break;
  }
};

equalButton.onclick = () => {
  if (operator == "+") {
    buffer = sum(firstBuffer, buffer);
    firstBuffer = 0;
  } else if (operator == "-") {
    buffer = substraction(firstBuffer, buffer);
    firstBuffer = 0;
  } else if (operator == "/") {
    buffer = division(firstBuffer, buffer);
    firstBuffer = 0;
  } else if (operator == "*") {
    buffer = multiplication(firstBuffer, buffer);
    firstBuffer = 0;
  } else if (operator == "%") {
    buffer = getMode(firstBuffer, buffer);
    firstBuffer = 0;
  }
};
