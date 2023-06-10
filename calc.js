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
    if(parseInt(operand2) === 0) {
        return "u stoopid?"
    }
    return parseInt(operand1) / parseInt(operand2);
}
function calculateInput() {
    let displayArray = Array.from(display.textContent);

    if(displayArray.includes("+")) {
        displayArray =  display.textContent.split("+")
        operand1 = displayArray[0];
        operand2 = displayArray[1];
        return parseInt(operand1) + parseInt(operand2);
    }
    if(displayArray.includes("-")) {
        const displayArray =  display.textContent.split("-")
        operand1 = displayArray[0];
        operand2 = displayArray[1];
        return parseInt(operand1) - parseInt(operand2);
    }
    if(displayArray.includes("*")) {
        const displayArray =  display.textContent.split("*")
        operand1 = displayArray[0];
        operand2 = displayArray[1];
        return parseInt(operand1) * parseInt(operand2);
    }
    if(displayArray.includes("/")) {
        const displayArray =  display.textContent.split("/")
        operand1 = displayArray[0];
        operand2 = displayArray[1];
        console.log(operand1 +" " + operand2)
        return divideNumber(operand1,operand2);
    }
    return "Error";
}

function checkDisplayForOperator() {

    let displayArray =  display.textContent.split(operator);
    displayArray = displayArray.filter(e => e !=="");
    console.log(displayArray);
      if(display.textContent.includes(operator)) {
        console.log(displayArray.length);
        if(displayArray.length > 1) {
            console.log("length > 1")
            buttonEnter.click();
        }
        else if(displayArray.length === 1 ) {
            console.log("length === 1")
            display.textContent = display.textContent.slice(0,-1);
        }
      }
}

function checkDisplaySpace() {
    let displayArray = Array.from(display.textContent);
    console.log(displayArray);
    if(displayArray.length < 14) {
        return true;
    }
    else{
        return false;
    }
}




function updateDisplay() {
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
        if(checkDisplaySpace()) {
            checkDisplayForOperator();
            operator = "+";
            display.textContent += "+";          
        }

    });
    buttonMinus.addEventListener("click", function() {
        if(checkDisplaySpace()) {
            checkDisplayForOperator();
            operator = "-";
            display.textContent += "-";          
        }
    });
    buttonDivide.addEventListener("click", function() {
        if(checkDisplaySpace()) {
            checkDisplayForOperator();
            operator = "/";
            display.textContent += "/";          
        }
    });
    buttonMultiply.addEventListener("click", function() {
        if(checkDisplaySpace()) {
            checkDisplayForOperator();
            operator = "*";
            display.textContent += "*";          
        }
    });
    buttonEnter.addEventListener("click", function() {
        display.textContent = calculateInput();
    });
    

}

updateDisplay();



