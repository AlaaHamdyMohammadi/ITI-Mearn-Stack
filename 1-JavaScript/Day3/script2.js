'use strict';

//1
// const eCharacter = function(){
//     let counter = 0;
//     let word = prompt('Enter your word : ');
//     for(let i = 0; i < word.length; i++){
//         if(word.charAt(i) === 'e') counter++
//     }
//     document.write(`Number of e character = ${counter}`);
// }
// eCharacter();

//-------------------------------------------
// 2
// const palindrome = function(){
//     const word = prompt("Enter your word :");
//     const check = prompt("do you want case sensitive ?");
//     if(check == 'y'){
//         const revWord = word.split('').reverse().join('');
//         //console.log(revWord);
//         if (word === revWord) {
//           document.write("Word is palindrome");
//         } else {
//           document.write("Word is not palindrome");
//         }
//     }else{
//         const test = word.toLowerCase();
//          const revWord = test.split('').reverse().join('');
//         //const revWord = word.toLowerCase().split("").reverse().join("");
//         if (test === revWord) {
//           document.write("Word is palindrome");
//         } else {
//           document.write("Word is not palindrome");
//         }
//     }
// }
// palindrome();

//-------------------------------------------
//3
// const calculates = function(){
//     const arrNumbers = [];
//     let sum = 0, product = 1;
//     for(let i = 0; i < 4; i++){
//         //const calc = Number(prompt(`Enter your number : ${i + 1}`));
//         const calc = +prompt(`Enter your number : ${i + 1}`);
//         arrNumbers.push(calc);
//         sum += arrNumbers[i];
//         product *= arrNumbers[i];
//     }
//     let division = arrNumbers[0] / arrNumbers[1] / arrNumbers[2] / arrNumbers[3];
//     console.log(arrNumbers);
//     console.log(`Sum = ${sum}`);
//     console.log(`Division = ${division}`);
//     console.log(`Product = ${product}`);
// }
// calculates();

//-------------------------------------------
//4
// const sortNumbers = function(){
//     const numbers = [];
//     for(let i = 0; i < 4; i++){
//         // const calc = Number(prompt(`Enter your number : ${i + 1}`));
           // const calc = +prompt(`Enter your number : ${i + 1}`);

//         numbers.push(calc);
//     }
//     console.log(`Original = ${numbers}`);
//         /*
//             x = current value, y = next value
//             if x - y = negative => ascending sort
//             if x - y = positive => descending sort
//         */
//     const ascArr = numbers.slice().sort((x, y) => x - y);
//     const desArr = numbers.slice().sort((x, y) => y - x);
//     console.log(`Ascending = ${ascArr}`);
//     console.log(`Descending = ${desArr}`);
//     console.log(`Original = ${numbers}`);
// }
// sortNumbers();

//-------------------------------------------
//5
// const calcArea = function(raduis){
//     raduis = prompt("Enter circle raduis");
//     const area = Math.PI * raduis ** 2; 
//     console.log(`Area = ${area}`);
// }
// calcArea();

// const calcSquare = function(number){
//     number = prompt('Enter square root');
//     console.log(`Square root = ${Math.sqrt(number)}`);
// }
// calcSquare();

const calcAngle = function(number){
    number = +prompt('Enter cos value');
    const angle = Math.cos(number * Math.PI / 180).toFixed(1)
    console.log(`Angle = ${angle}`);
}
calcAngle();




