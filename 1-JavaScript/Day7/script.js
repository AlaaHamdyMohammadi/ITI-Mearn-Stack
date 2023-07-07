'use strict';

//1
// const header = document.querySelector("#header");
// header.addEventListener('click', () => {
//   header.classList.add('test');
// })

//2
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   const input = document.getElementsByTagName('input')[0];

//   const inpt = input.getAttribute('type');
//   if(inpt === "password"){
//     input.setAttribute('type', 'text');
//   }else{
//     input.setAttribute('type', 'password');
//   }
//   // document.getElementsByTagName('input')[0].setAttribute('type', 'text');
// })

//3
// const btn = document.querySelector("#btn");
// btn.addEventListener('click', () => {

//   const div = document.createElement('div');
//   document.body.appendChild(div);

//   const fHead = document.createElement('h1');
//   const sHead = document.createElement('h2');

//   fHead.textContent = 'first';
//   sHead.textContent = 'second';
  
//   div.appendChild(fHead);
//   div.appendChild(sHead);
// })

//4
// const img = document.querySelector('.img');
// const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
// let interval;
// let count = 1;

// document.images[0].addEventListener("mouseover", () => {
  
//   const that = this;
//   const interval = setInterval(() => {
//     if (count > images.length - 1) count = 0;
//     that.src = images[count];
//     count++;
//   }, 1000);
// });

// document.images[0].addEventListener("mouseout", () => {
//   clearInterval(interval);
// })

//6
// const cars = document.querySelector('#cars');
// cars.addEventListener('change', (e) => {
//   console.log(e.options[e.])
// })

// document.forms[0].addEventListener('submit', (e) => {
//   e.preventDefault();
//   const inputs  = this.elements;
//   const nameRegex = /^[a-zA-Z]{3, 25}$/;
//   const emailRegex = /^[a-zA-Z]{3, 10}(@)(gmail | yahoo)(.com)$/;
//   inputs[0].nextElementSibling.textContent = '';
//   inputs[1].nextElementSibling.textContent = '';
//   if(nameRegex.test(inputs[0].value) && emailRegex.test(inputs[1].value)){
   
//     this.submit();

//   }else if (!nameRegex.test(inputs[0].value)) {

//     inputs[0].nextElementSibling.textContent = 'Invalid Name'

//   }else if (!emailRegex.test(inputs[1].value)) {

//     inputs[1].nextElementSibling.textContent = 'Invalid Email'
//   }
// })

// function test(e){
//   alert(e.textContent)
// }

// const img = document.querySelector('#img');
// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// const btn3 = document.querySelector('#btn3');
// const btn4 = document.querySelector('#btn4');

document.forms[0].addEventListener('submit', (e) => {
  e.preventDefault();
  let inputs = document.getElementsByTagName('input');
  // console.log(inputs)
  const nameRegex = /^[a-zA-Z]{3,25}$/;
  const ageRegex = /^[1-5]*[0-9]$/;
  const emailRegex = /^[a-zA-Z]{3,10}(@)(gmail|yahoo)(.com)$/;
  inputs[0].nextElementSibling.textContent = "";
  inputs[1].nextElementSibling.textContent = "";
  inputs[2].nextElementSibling.textContent = "";
  if (
    nameRegex.test(inputs[0].value) &&
    ageRegex.test(inputs[1].value) &&
    emailRegex.test(inputs[2].value)
  ) {
    //this.submit();
    const table = `
      <tr>
        <td>${inputs[0].value}</td>
        <td>${inputs[1].value}</td>
        <td>${inputs[2].value}</td>
        
      </tr>
    `;
    document.querySelector('#table').innerHTML += table;
    document.forms[0].reset();
  } else if (!nameRegex.test(inputs[0].value)) {
    inputs[0].nextElementSibling.textContent = "Invalid Name";
  } else if (!ageRegex.test(inputs[1].value)) {
    inputs[1].nextElementSibling.textContent = "Invalid Age";
  } else if (!emailRegex.test(inputs[2].value)) {
    inputs[2].nextElementSibling.textContent = "Invalid Email";
  }
})

