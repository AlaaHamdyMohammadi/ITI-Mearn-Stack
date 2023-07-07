'use strict';

// //1
// const xhr = new XMLHttpRequest();
// console.log(xhr);

// //2
// xhr.open("GET", "https://fakestoreapi.com/products");

// //3
// xhr.send();

// xhr.addEventListener('load', function(){
//   //console.log(xhr.response)
//   const data = JSON.parse(xhr.response);
//   console.log(data)

//   for(const product of data){
//     console.log(product.title);
//     const element = document.createElement('h1');
//     const image = document.createElement('img');
//     element.textContent = product.title;
//     image.src = product.image;
//     document.body.append(element);
//     document.body.append(image);
//     //document.body.appendChild(element);
//   }
// })

// xhr.addEventListener('readystatechange', () =>{
//   if(xhr.readyState === 4){
//     console.log(xhr.response)
//   }
// })
//----------------------------------
// 1) Local storage
/*
function saveInLocalStorage(){

  const inputs = document.getElementsByTagName('input');
  localStorage.setItem('userName', inputs[0].value);
  localStorage.setItem('userEmail', inputs[1].value);
}

function getFromLocalStorage(){
  const name = localStorage.getItem('userName');
  const email = localStorage.getItem('userEmail');
  const text = document.querySelector('#text');
  text.textContent = `your name is ${name} and your email is ${email}`;
}

function deleteFromLocalStorage(){
  // localStorage.removeItem("userName");
  // localStorage.removeItem("userEmail");

  localStorage.clear();
}
*/
//----------------------------------
// 2) Session storage
/*
function saveInSessionStorage(){
  const inputs = document.getElementsByTagName("input");
  sessionStorage.setItem('userName', inputs[0].value);
  sessionStorage.setItem('userEmail', inputs[0].value);
}

function getFromSessionStorage(){
  const userName = sessionStorage.getItem('userName');
  const userEmail = sessionStorage.getItem("userEmail");
  alert(`userName is ${userName}`);
}

function deleteFromSessionStorage(){
  sessionStorage.clear();
}
*/
//----------------------------------
// 3) Cookies storage

function saveInCookies(){
  const input = document.getElementsByClassName('cookies');
  const now = new Date();
  now.setMonth(now.getMonth() + 2);
  document.cookie = "userName="+input[0].value+";expires="+now;
}

const obj = {};
function getFromCookies(){
  const saveCookie = document.cookie;
  const splitCookie = saveCookie.split(';');
  for(const cookie of splitCookie){
    //splitCookie.split('=');
    obj[cookie.split("=")[0].trim()] = cookie.split("=")[1];
  }
}


function deleteFromCookies(){
  document.cookie="userName=;expires=";
  document.cookie="userEmail=;expires="
}