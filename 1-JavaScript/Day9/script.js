"use strict";

// 1)function statement
// function sum(a, b){
//   return a+b;
// }
// const result = sum(5,5);
// console.log(result);

// 2) annonymous function

// 3) self invoked function IIFE
// (function(){
//   console.log('IIFE')
// })();

// 4) arrow function
// const emp={
//   id:1,
//   name:'Alaa',
//   display: function(){
//     setTimeout(() => {
//       //const _this = this;
//       console.log(this.id, this.name)
//     },1000)
//   }
// }
// emp.display();

//----------------
/*
function fun(){
  // console.log(arguments);
  // for(const arg of arguments){
  //   console.log(arg);
  // }

  // [].forEach.apply(arguments, [function(ele){
  //   console.log(ele)
  // }])

  const newArr = Array.from(arguments);
  console.log(newArr)
}
fun(10, 'alaa');
fun(10, 20,50);
*/

//----------------------------
/*
const student1 ={
  id:1,
  name:'Alaa',
  degree: 97,
  printData: function(){
    console.log(this.id, this.name, this.degree);
  }
}
student1.printData();

const student2 ={
  id:3,
  name:'Eman',
  degree: 100,
}
//apply(), call(), bind()
// student1.printData.apply(student2);
// student1.printData.call(student2);
const fun = student1.printData.bind(student2);
fun();
*/
//----------------------------

// closure
/*
function outerFun(){
  let num = 0;
  return () => {
    num++;
    console.log(num);
  }
}
const result = outerFun();
result();
*/

//------------------------
/*
const obj ={
  // name : 'alaa',
  // age: 25,
}

// data descriptor
Object.defineProperties(obj,{
  name: {
    value: 'awra',
    writable: false,
    configurable: false,
    enumerable: true,
  },
  age: {
    value: 25,
    writable: true,
    configurable: true,
    enumerable: false,
  }
})
console.log(obj)
//accessor descriptor
*/

//------------------------

// const multiply = function(num1){

//   return(num2) =>{
//     return num1 * num2
//   }
// }
// console.log(multiply(3)(3));

//----------------------------------------
// 1)

const twoParameters = function(){
    if(arguments.length !== 2){
      throw new Error("number of parameters either less than or exceeds 2 Parameters")
    }else{
      console.log('Number of Arguments = 2')
    }  
}
twoParameters(1,2);

//----------------------------------------
// 2)

const adding = function(){
  let sum = 0;
  for(let i = 0; i < arguments.length; i++){
    if(typeof arguments[i] !== 'number'){
      throw new Error("All arguments must be numbers");
    }
    else{
      sum += arguments[i];
      console.log(sum);
    }
  }
}
adding(1,2,1)
//----------------------------------------
// 3)

const reversing = function(){
  const newArray = []
  newArray.forEach.apply(arguments, [function(ele){
    newArray.push(ele);
  }])
  console.log(newArray.reverse())

  const newArr = Array.from(arguments);
  console.log(newArr.reverse());
}
reversing(4,5,7);