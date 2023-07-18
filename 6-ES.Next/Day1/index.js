"use strict";

//Task1

const swapValues = () => {
  let x = 11,
    y = 22;
  console.log(`Before swap : x = ${x}, y = ${y}`);

  [x, y] = [y, x];
  console.log(`After swap : x = ${x}, y = ${y}`);
};
swapValues();

//------------------------------------
//Task2

const findNumber = (...numbers) => {
  const minNum = Math.min(...numbers);
  const maxNum = Math.max(...numbers);
  return `min = ${minNum}, max = ${maxNum}`;
};
console.log(findNumber(5, 1, -100, 4));
console.log(findNumber(50, 80, 100, 60, 77));
console.log(findNumber(15, 60, 54, -8, 4, 800, 45));

//-----------------------------------
//Task3

const fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// a
const stringEle = fruits.every((element) => typeof element === "string");
console.log(stringEle);

// b
const startWithA = fruits.some((element) => element.startsWith("a"));
console.log(startWithA);

// c
const filterArr = fruits.filter(
  (element) => element.startsWith("b") || element.startsWith("s")
);
console.log(filterArr);

// d
const newArr = fruits.map((element) => {
  //console.log(`I love ${value} `);
  return `I love ${element} 😋 `;
});

// e
newArr.forEach((element) => {
  console.log(element);
});



