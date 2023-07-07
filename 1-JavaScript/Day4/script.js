"use strict";

// const now1 = new Date();
// console.log(now1);

// console.log(now1.getTime());
// console.log(now1.getFullYear());
// console.log(now1.getDay());
// console.log(now1.getDate());
// console.log(now1.getYear());
// console.log(now1.toDateString());
// console.log(now1.toLocaleDateString());
// console.log(now1.toLocaleString());

// const now2 = new Date('2009-9-9');
// console.log(now2)

const date = function (now) {
  now = new Date().toLocaleString();
  document.write(now);
};

let newWindow;
const openWin = function () {
  newWindow = setTimeout(
    open("https://www.google.com", "_blanck", "width=500,height=500"),
    3000
  );
};
const closeWin = function(){
  newWindow.close();
}


const evenRegex = /^.*[02468]$/;

function isEven(str) {
  return evenRegex.test(str);
}

console.log(isEven("2341"));
console.log(isEven("132"));
console.log(isEven("29"));
console.log(isEven("5578"));

// var firstName = prompt("What's Your First Name ? ");
// var mobileNumber = prompt("What's Your Mobile Number ? ");
// var email = prompt("What's Your Email ? ");
// var rgx1 = /^01(0|1|2|5)[0-9]{8}$/;
// var rgx2 = /^[a-z]{3,8}[0-9]{0,3}@(gmail | yahoo)(.com)$/;
// if (
//   isNaN(firstName) &&
//   mobileNumber.length === 11 &&
//   rgx1.test(mobileNumber) &&
//   rgx2.test(email)
// ) {
//   var color = prompt("What's Your Color ? ");
//   if (color == "red" || color == "green" || color == "blue") {
//     document.write(
//       "<h2 style='color : " + color + "'> Welcome " + firstName + "</h2>"
//     );
//     document.write(
//       "<h2 style='color : " +
//         color +
//         "'> Your Mobile Is " +
//         mobileNumber +
//         "</h2>"
//     );
//     document.write(
//       "<h2 style='color : " + color + "'> Your Email Is " + email + "</h2>"
//     );
//   }
// } else {
//   alert("Invalid");
// }
