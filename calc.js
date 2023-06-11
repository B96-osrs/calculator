const button1 = document.querySelector("#one-btn");
const button2 = document.querySelector("#two-btn");
const button3 = document.querySelector("#three-btn");
const button4 = document.querySelector("#four-btn");
const button5 = document.querySelector("#five-btn");
const button6 = document.querySelector("#six-btn");
const button7 = document.querySelector("#seven-btn");
const button8 = document.querySelector("#eight-btn");
const button9 = document.querySelector("#nine-btn");
const button0 = document.querySelector("#zero-btn");
const buttonClear = document.querySelector("#clear-btn");
const buttonMod = document.querySelector("#mod-btn");
const buttonPower = document.querySelector("#power-btn");
const buttonPlus = document.querySelector("#plus-btn");
const buttonMinus = document.querySelector("#minus-btn");
const buttonMultiply = document.querySelector("#multiply-btn");
const buttonDivide = document.querySelector("#divide-btn");
const buttonDecimal = document.querySelector("#decimal-btn");
const buttonEnter = document.querySelector("#enter-btn");
let operand1 = 0;
let operand2 = 0;
let operator;
const calcContainer = document.querySelector(".calc-container");
const display = document.querySelector("#display");

function addNumber() {
    return operand1 + operand2;
}

function substractNumber() {
    return operand1 - operand2;
}

function multiplyNumber() {
    return operand1 * operand2;
}

function divideNumber() {
    if(parseFloat(operand2) === 0) {
        return "u stoopid?"
    }
    return parseFloat(operand1) / parseFloat(operand2);
}

function modNumber() {
    let rest = operand1;
    while(operand2 <= rest) {
        rest = rest - operand2;
    }
    return rest;
}

function powNumber() {
    let result = 1;
    let base = operand1;
    let exp = operand2;
    if(exp > 1) {
      for(let i = 0; i < exp; i++) {
            result = result * base;        
      }
      return result;
    }
    if(exp === 1) {
      return base;
    }
    return result;
  };
function calculateInput() {
    let displayArray = Array.from(display.textContent);
    let result;

    if(displayArray.includes("+")) {
        displayArray =  display.textContent.split("+")
        operand1 = displayArray[0];
        operand2 = displayArray[1];
        result = parseFloat(operand1) + parseFloat(operand2);
        console.log(result);
        console.log("op1 " + operand1);
        console.log("op2 " + operand2);

        return checkNumberSize(result);
    }
    if(displayArray.includes("-")) {
        const displayArray =  display.textContent.split("-")
        operand1 = displayArray[0];
        operand2 = displayArray[1];
        result =  parseFloat(operand1) - parseFloat(operand2);
        return checkNumberSize(result);
    }
    if(displayArray.includes("*")) {
        const displayArray =  display.textContent.split("*")
        operand1 = displayArray[0];
        operand2 = displayArray[1];
        result =  parseFloat(operand1) * parseFloat(operand2);
        return checkNumberSize(result);
    }
    if(displayArray.includes("/")) {
        const displayArray =  display.textContent.split("/")
        operand1 = displayArray[0];
        operand2 = displayArray[1];
        result = divideNumber();
        return checkNumberSize(result);
    }
    if(displayArray.includes("%")) {
        const displayArray =  display.textContent.split("%")
        operand1 = displayArray[0];
        operand2 = displayArray[1];
        result = modNumber();
        return checkNumberSize(result);
    }
    if(displayArray.includes("^")) {
        const displayArray =  display.textContent.split("^")
        operand1 = displayArray[0];
        operand2 = displayArray[1];
        result = powNumber();
        return checkNumberSize(result);
    }
    return "Error";
}
function checkNumberSize(resultNumber) {
    if(resultNumber <= 9999999999999 && resultNumber >= 0) {
      let numString = (Math.floor(parseFloat(resultNumber.toFixed(12)))).toString();
      let resultNumberDigits = Array.from(numString).length;
      let convertedNumber = resultNumber.toFixed(13-resultNumberDigits);
      let dec = (resultNumber - Math.floor(parseFloat(resultNumber.toFixed(12))));
      let decString = dec.toString();
      let decNumberDigits = Array.from(decString).length;
      if((decNumberDigits + resultNumberDigits) > 13) {
        return shortenDecimal(convertedNumber);
      }
      else {       
        console.log("case2");
        return resultNumber;                // without this if case every decimal number is displayed
                                            // with zeros at the end until display is full
      }
    }
    else {
        return "Error";
    }
}

function checkForDecimal() {
  let displayArray = Array.from(display.textContent);
  if((displayArray[displayArray.length - 1] !== operator) && !checkDisplayEmpty()) {
    let wordArray = display.textContent.split(operator);
    if(wordArray.length < 2 && !(wordArray[0].includes("."))) {
      return true;
    }
    else if(wordArray.length === 2 && !(wordArray[1].includes("."))) {
      return true;
    }
  }
  else {
    return false;
  }
}

function checkDisplayForOperator() {

    let displayArray =  display.textContent.split(operator);
    displayArray = displayArray.filter(e => e !=="");
    console.log(operator);
      if(display.textContent.includes(operator)) {     
        if(displayArray.length > 1) {
            buttonEnter.click();
        }
        else if(displayArray.length === 1 ) {
            display.textContent = display.textContent.slice(0,-1);
        }
      }
}

function checkDisplaySpace() {
    let displayArray = Array.from(display.textContent);
    if(displayArray.length < 14) {
        return true;
    }
    else{
        return false;
    }
}
function checkDisplayEmpty() {
    if(display.textContent === "") {
        return true;
    }
    else {
        return false;
    }
}

function shortenDecimal(decimalNumber) {
  let numberString = decimalNumber.toString();
  let numberArray = Array.from(numberString);

  while(numberArray[numberArray.length - 1 === "0"]) {
    numberArray = numberArray.pop();
  }
  result = parseFloat(numberArray.join().replaceAll("," , ""));
  return result;
}


function updateDisplay() {

    window.addEventListener("keydown", function(e) {
        switch (e.code) {
          case "Numpad1":
          case "Digit1":
            button1.click();
            break;
          case "Numpad2":
          case "Digit2":
            button2.click();
            break;
          case "Numpad3":
          case "Digit3":
            button3.click();
            break;
          case "Numpad4":
          case "Digit4": 
            button4.click();
            break;
          case "Numpad5":
          case "Digit5":
            button5.click();
            break;
          case "Numpad6":
          case "Digit6": 
            button6.click();
            break;
          case "Numpad7":
          case "Digit7":
            button7.click();
            break;
          case "Numpad8":
          case "Digit8": 
            button8.click();
            break;
          case "Numpad9":
          case "Digit9":
            button9.click();
            break;
          case "NumpadAdd":
            buttonPlus.click();
            break;
          case "Period":
          case "NumpadDecimal": 
            buttonDecimal.click();
            break;
          case "NumpadSubstract":
            buttonMinus.click();
            break;
          case "NumpadDivide":
            buttonDivide.click();
            break;
          case "NumpadMultiply":
            buttonMultiply.click();
            break;
        }
    });
    buttonDecimal.addEventListener("click", function() {
        if(checkDisplaySpace() && checkForDecimal()) {
           display.textContent += ".";
       }
       
    });
     
    button1.addEventListener("click", function() {
        if(checkDisplaySpace()) {
           display.textContent += "1";
       }
       
    });
    button2.addEventListener("click", function() {
        if(checkDisplaySpace()) {
            display.textContent += "2";
        }
    });
    button3.addEventListener("click", function() {
        if(checkDisplaySpace()) {
            display.textContent += "3";
        }
    });
    button4.addEventListener("click", function() {
        if(checkDisplaySpace()) {
            display.textContent += "4";
        }
    });
    button5.addEventListener("click", function() {
        if(checkDisplaySpace()) {
            display.textContent += "5";
        }
    });
    button6.addEventListener("click", function() {
        if(checkDisplaySpace()) {
            display.textContent += "6";
        }
    });
    button7.addEventListener("click", function() {
        if(checkDisplaySpace()) {
            display.textContent += "7";
        }
    });
    button8.addEventListener("click", function() {
        if(checkDisplaySpace()) {
            display.textContent += "8";
        }
    });
    button9.addEventListener("click", function() {
        if(checkDisplaySpace()) {
            display.textContent += "9";
        }
    });
    button0.addEventListener("click", function() {
        if(checkDisplaySpace()) {
            display.textContent += "0";
        }
    });
    buttonClear.addEventListener("click", function() {
        display.textContent = "";
    });
    buttonPlus.addEventListener("click", function() {
        if(checkDisplaySpace() && !checkDisplayEmpty()) {
            checkDisplayForOperator();
            operator = "+";
            display.textContent += "+";          
        }
    });
    buttonMod.addEventListener("click", function() {
        if(checkDisplaySpace() && !checkDisplayEmpty()) {
            checkDisplayForOperator();
            operator = "%";
            display.textContent += "%";          
        }

    });
    buttonMinus.addEventListener("click", function() {
        if(checkDisplaySpace() && !checkDisplayEmpty()) {
            checkDisplayForOperator();
            operator = "-";
            display.textContent += "-";          
        }
    });
    buttonDivide.addEventListener("click", function() {
        if(checkDisplaySpace() && !checkDisplayEmpty()) {
            checkDisplayForOperator();
            operator = "/";
            display.textContent += "/";          
        }
    });
    buttonMultiply.addEventListener("click", function() {
        if(checkDisplaySpace() && !checkDisplayEmpty()) {
            checkDisplayForOperator();
            operator = "*";
            display.textContent += "*";          
        }
    });
    buttonPower.addEventListener("click", function() {
        if(checkDisplaySpace() && !checkDisplayEmpty()) {
            checkDisplayForOperator();
            operator = "^";
            display.textContent += "^";          
        }
    });
    buttonEnter.addEventListener("click", function() {
        display.textContent = calculateInput();
    });
    

}
updateDisplay();




