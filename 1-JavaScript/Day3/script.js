'use strict';

//1
// const eChar = prompt('Enter your string : ');
// let count = 0;

// for(let i = 0; i < eChar.length; i++){
//     if(eChar.charAt(i) === 'e'){
//         count++;
//     }
// }
// console.log(`Number of e character = ${count}`);

//2
/*
const word = prompt('Enter your word :');
const check = prompt('do you want case sensitive ?')
if(check === 'y'){
    const reverse = function(){
        let reverseStr = '';
        for(let i = word.length -1; i >= 0; i--){
            reverseStr += word.charAt(i);
        }
        return reverseStr;
    }
    if(word === reverse()){
        console.log(`${word} is palindrome`);
    }else{
        console.log(`${word} is not palindrome`);
    }
}
*/

//3
/*
let num = [];
const test = prompt("Enter your number");
for(let i = 0; i < num.length; i++){
    num[i] = test;
}
const sum = prompt('your sum');
*/

// let number = [];
// for( let i = 0; i < 3; i++){
//     let nums = Number(prompt(`enter number ${i}`));
//     number.push(nums);
// }
// const sum = number[0] + number[1] + number[2]; 
// const product = number[0] * number[1] * number[2]; 

// console.log(`Sum = ${sum}`);
// console.log(`Product = ${product}`);

//4
/*
const num1 = Number(prompt('enter number 1'))
const num2 = Number(prompt("enter number 2"));
const num3 = Number(prompt("enter number 3"));
const num4 = Number(prompt("enter number 4"));
const fillArr = [num1, num2, num3, num4];
console.log(fillArr);
console.log(fillArr.reverse());
console.log(fillArr.sort());
*/

const num = [];
for(let i = 0; i < 4; i++){
    const numbers = Number(prompt(`enter number ${i}`));
    num.push(numbers);
}
console.log(num);

num.sort(function (a, b) {
  return a - b;
});
console.log(num.sort());
console.log(num.reverse());

// 5
// const raduis = prompt('enter circle raduis');
// const area = Math.PI * raduis * raduis;
// console.log(`Area = ${area}`);

// const square = prompt('enter square root');
// console.log(`Square root = ${Math.sqrt(square)}`);

// const angle = prompt('calculate cos value');
// console.log(Math.cos(angle));
