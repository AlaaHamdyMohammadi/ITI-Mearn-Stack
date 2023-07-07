'use strict';

const setCookies = function(name, value, date){
    !date && (date = new Date().getMonth() + 2);
    document.cookie = `${name} = ${value}; expires = ${date}`;
}
const getCookies = function(name){
    let cookie = document.cookie.split('; ').find((e) => e.startsWith(name)).split('=')[1];
    console.log(cookie);
    return cookie;
}

const hasCookies = function(name){
    let cookie = document.cookie.split("; ").find((e) => e.startsWith(name));
    return cookie;
}

const deleteCookies = function(name){
    setCookies(name, "", "Thu, 04 Feb 1998 00:00:00 UTC");
}

let firstName, age, gender, color;

const getInformation = function(){
    firstName = document.getElementById("name").value;
    age = document.getElementById("age").value;
    gender = document.querySelector('input[name="gender"]:checked').value;
    color = document.getElementById("color").value;

    console.log(firstName, age, gender, color);

    if (firstName && age && gender && color) {
      setCookies("name", firstName);
      setCookies("age", age);
      setCookies("gender", gender);
      setCookies("color", color);
      location.href = "./message.html";
    }
}

let visit = 1;
// deleteCookies("visit");
const showInformation = function(){
    const container = document.querySelector(".container");
    if (hasCookies("visit")) {
      visit = parseInt(getCookies("visit")) + 1;
      setCookies("visit", visit);
    } else {
      setCookies("visit", visit);
    }

    let color = getCookies("color");
    let name = getCookies("name");
    let gender = getCookies("gender");
    let age = getCookies("age");
    let image = gender == "female" ? "./20.jpg" : "./10.jpg";

    container.innerHTML = `
        Welcome <span style = "color: ${color}" >  ${name} </span> 
        your age is  <span style = "color: ${color}" >  ${age} </span> 
        <img src = ${image} alt = ${gender}/>
        this is your visit number ${visit}
    `;
}