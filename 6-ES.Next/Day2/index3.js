"use strict";

fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((res) => res.json())
  .then((data) => {
    const markup = data
      .map(
        (element) =>
          `<button onclick="getPosts(${element.id})" style="padding: 10px; border: none;">${element.name}</button>`
      )
      .join(" ");
    document.querySelector('.container').innerHTML = markup;

}).catch(err => console.log(`Error: ${err}`));

async function getPosts(userId) {
    try{
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        const data = await res.json();
        const markup = data.map(element => `<li>${element.title}</li>`).join(' ');
        document.querySelector('.container1').innerHTML = markup;
        
    }catch(err){
        console.log(`Error: ${err}`);
    }
}
