// 'use strict';
// /*
// var num = 5/0;
// console.log(num)
// var s = undefined;
// console.log(typeof s)

// var w = 'alaa'/5;
// console.log(w);

// console.log(typeof NaN)

// for(var i = 0; i < 5; i++){
//     console.log(i);
// }
// console.log(i)

// function test(a = 3, b = 3){
//     if (typeof a == "number" && typeof b == "number") 
//     console.log(a * b);
// }
// test(5, 5);

// var result = null;
// console.log(result);

// try {
//   console.log("Hello");
// } catch (err) {
//   console.log("Goodbye");
// }

// throw new Error();
// console.log("Hello");

// try {
//   Number(5).toPrecision(300);
// } catch (e) {
//   console.log("There was an error");
// }
// */

// // 1
// var y;
// // console.log(y);

// //2
// // console.log(y);

// //3
// // var x = 10;
// // var y = 20;
// // console.log(y - x * 2);

// //4
// // var y;
// // console.log(typeof y);
// // console.log(y);

// //5
// // var x = "1";
// // var y = 2;
// // console.log(x + y);

// //6
// // var x = 1;
// // var y = true;
// // console.log(x + y);

// //7
// // var x = 12;
// // var y = "6";
// // console.log(x / y);

// //8
// // console.log(15 + 3 + "number");
// // console.log("number" + 15 + 3);

// //9
// var x = false;
// var y = !!x;
// console.log(y);

// //10
// var x = false;
// console.log(typeof x == 0);

// //11
// // const odd = function(){
// //     for(let i = 1; i <= 9; i++){
// //         if(i% 2 === 1){
// //             console.log(i)
// //         }
// //     }
// // }
// // odd();

// //12
// const great = alert("Welcome to my site");
// // console.log(great);
// const name = prompt('What is your name ?');
// console.log(`Welcome ${name}`);


// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};` 
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;
    console.log(message, style)
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    }
    else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    }
    else {
        console.log(message, style);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
  consoleStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}
// Call styleAndCelebrate
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');

// function scopeTest() {
//   var localVar = 88;
// }

// console.log(localVar);

function meal(animal) {
        animal.food = animal.food + 10;
    }

    var dog = {
        food: 10
    };
    meal(dog);
    meal(dog);

    console.log(dog.food);

    function two() {
      return 2;
    }

    function one() {
      return 1;
    }

    function calculate(initialValue, incrementValue) {
      return initialValue() + incrementValue() + incrementValue();
    }

    console.log(calculate(two, one));