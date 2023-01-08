function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let num1 = 0;
let num2 = 0;

let operation = '+';

let selectLevel = document.getElementById('level');
let selectRodzaj = document.getElementById('rodzaj');
let divProblem = document.getElementById('problem');
let btnSubmit = document.getElementById('submit');
let inputAnswer = document.getElementById('answer');

inputAnswer.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        switch (operation){
            case '+':
                if (inputAnswer.value == num1 + num2){
                    inputAnswer.value = '';
                    losuj();
                } else {alert('Zła odpowiedź!');}
                break;
            case '-':
                if (inputAnswer.value == num1 - num2){
                    inputAnswer.value = '';
                    losuj();
                } else {alert('Zła odpowiedź!');}
                break;
            case '*':
                if (inputAnswer.value == num1 * num2){
                    inputAnswer.value = '';
                    losuj();
                } else {alert('Zła odpowiedź!');}
                break;
            case '/':
                if (inputAnswer.value == num1 / num2){
                    inputAnswer.value = '';
                    losuj();
                } else {alert('Zła odpowiedź!');}
                break;
        }
    }
});

window.addEventListener("load", losuj());

function losuj(){
    num1 = randomIntFromInterval(1,selectLevel.value);
    num2 = randomIntFromInterval(1,selectLevel.value);
    let tempNum = randomIntFromInterval(0,selectRodzaj.value);
    if (tempNum === 0){
        operation = '+';
    } else if (tempNum == 1){
        operation = '-';
    } else if (tempNum == 2){
        operation = '*';
    }
    divProblem.innerHTML = num1 + operation + num2 + "=?";
}