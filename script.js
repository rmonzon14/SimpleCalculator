let newNum = '';
let oldNum = '';

const displayNewNumber = document.getElementsByClassName('display-new-num')[0];
const number = document.querySelectorAll('.number');

number.forEach((numBtn) => {
    numBtn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    })
});

function handleNumber(number) {
    if (newNum.length <= 12) {
        newNum += number;
        displayNewNumber.textContent = newNum;
    }
}

const displayOldNumber = document.querySelectorAll('.display-old-num')[0];
const operator = document.querySelectorAll('.operator');

operator.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', (e) => {
        operate(e.target.textContent);
    })
});

let chosenOperator = '';

function operate(operator) {
    if (newNum != '' && operator != '=') {
        chosenOperator = operator;
        displayNewNumber.textContent = '';
        oldNum = newNum;
        newNum = '';
        displayOldNumber.textContent += `${oldNum + ' ' + operator + ' '}`;
    }
}

function calculate() {
    oldNum = Number(oldNum);
    newNum = Number(newNum);

    if (chosenOperator === '+') {
        oldNum =+ newNum;
    } else if (chosenOperator === '-') {
        oldNum = oldNum - newNum;
    } else if (chosenOperator === 'x') {
        oldNum = oldNum * newNum;
    } else if (chosenOperator === '/') {  
        oldNum = oldNum / newNum;
    }
    console.log(oldNum);
}

const equal = document.getElementById('equal');

equal.addEventListener('click', () => {
    if (newNum.length != 0 && oldNum.length != 0) {
        calculate();
    }
});

const clear = document.getElementsByClassName('clear')[0];

clear.addEventListener('click', reset);

function reset() {
    newNum = '';
    oldNum = '';
    displayNewNumber.textContent = '0';
    displayOldNumber.textContent = '';
}

