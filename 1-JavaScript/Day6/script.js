'use strict';

// function display(e){
//   if(e.button == 0){
//     console.log('left')
//   }
//   else if(e.button == 2){
//     console.log('right')
//   }
//   else{
//     console.log('wheel')
//   }
// }

// const text = document.getElementById('text');
// text.addEventListener('keydown', function(e){
//   if(e.key === 'c'){
//     console.log('You press c character')
//   }
// })

//create
// const myEvent = new Event('seen');

// //listen
// document.getElementById('h1').addEventListener('seen', function(){
//   alert('event fired')
// })

//fire
// setTimeout(function(){
//   document.getElementById("h1").dispatchEvent(myEvent);
// }, 5000);


//1
// const text = document.getElementById('text');
// text.addEventListener('keydown', function(e){
//   // console.log(e.key)
//   if (e.key === "Alt" || e.key === "Shift" || e.key === "Control") {
//     alert(`You press ${e.key}`);
//   }else{
//     alert(`ASCII code of ${e.key} = ${e.keyCode}`);
//   }
// })

//-------------------------------------

//2
// window.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });

//-------------------------------------------

//3
// const form = document.getElementById('form');
// const submit = document.getElementById('submit');

// function prevent(e){
//   e.preventDefault();
// }

// setTimeout(() => {
//   form.removeEventListener('submit', prevent);
//   submit.disabled = true;
//   alert('Not Submitted');
// }, 5000);

