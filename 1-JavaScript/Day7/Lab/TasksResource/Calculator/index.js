'use strict';

let answer = document.getElementById("Answer");

function EnterNumber(value){
    answer.value += value;
}

function EnterOperator(value){
    answer.value += value;
}

function EnterEqual() {
  if (answer.value === "") return;
  const test = eval(answer.value);
  answer.value = test;
}

function EnterClear(){
    answer.value = '';
}