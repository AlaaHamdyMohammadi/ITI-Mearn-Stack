"use strict";

// function openWin(){
//   open("index2.html","", "width = 300", "height = 300", "screenX = 100", "screenY = 100")
// }
// console.log(window.screenX);
// console.log(window.screenY);

// //getSelection()

/*
Screen Object properties:
  1-height
  2- availHeight
  3- width
  4- availWidth
*/

// console.log(screen.height)

// console.log(navigator.language);
// console.log(navigator.cookieEnabled);
// console.log(navigator.onLine);


//go(index), back(), forward()
// console.log(history.length);
// console.log(history.go(0));

//location = 1-href, 2-hash, 3-search

// setTimeout(() => {
//   // location.href = ""
// }, 3000);

/*
//const password = location.search.split('&')[2];
        //console.log(location.search);
*/


const btn = document.getElementById('btn');

btn.addEventListener("click", function(){
  open("index2.html", "", "width = 300", "height = 300");
});