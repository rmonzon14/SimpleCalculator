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

function operate(operator) {
    if (newNum != '') {
        displayNewNumber.textContent = '';
        oldNum = newNum;
        newNum = '';
        displayOldNumber.textContent += `${oldNum + ' ' + operator + ' '}`;
    }

}