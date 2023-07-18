'use strict';
/*
let x;
setTimeout(() => {
    x = 10;
    //console.log(x);
},2000);

function first(){
    console.log('first');
    second();
    console.log('third');
}
function second(){
    setTimeout(() => {

        console.log('second')
    },1000)
}
first()
*/

/*
callbackHell
setTimeout(function(){
    const ids = [1,2,3,4,5];
//     console.log(ids);
//     setTimeout(function(){
//         let user = {
//             id: ids[2],
//             name: 'Alaa',
//         }
//         console.log(user);
//     }, 1000);
// },2000);
// */

// const getIds = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         let ids = [1,2,3,4,5];
//         if(ids){
//             resolve(ids);
//         }else{
//             reject('Error');
//         }
//     },2000)
// });
// console.log(getIds);

// async function getData(){

//     const ids = await getIds;
//     console.log(ids);
//     const user = await getUser(ids[1]);
//     console.log(user)
// }
// getData()

// // p.then(function(data){
// //     console.log(data);
// //     return getUser(data[2]);
// // }).then(function(user){
// //     console.log(user);
// // }).catch(() => console.log('Error'));


// function getUser(id){
//     const userPromise = function(resolve, reject){
//         setTimeout(function(){
//             user={
//                 id,
//                 name: 'Alaa',
//             }
//             if(user){
//                 resolve(user);
//             }else{
//                 reject('Error');
//             }
//         }, 500)
//     }
//     return userPromise;
// }

// // getUser(5).then(function(userData){
// //     console.log(userData);
// // }).catch(function(err){
// //     console.log('Error');
// // })

// function getAddress(name){

//     const userAdress = new promise(function(resolve, reject){
//         setTimeout(function(){
//             const address ={
//                 name,
//                 city: 'cairo',
//             }
//             if (address) {
//               resolve(address);
//             } else {
//               reject("Error");
//             }
//         },1000);
//     })

//     return userAdress;
// }

fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((res) => res.json())
  .then((data) => {
    //console.log(data);
    const markup = data
      .map(
        (element) => {
            `<button onclick="getPosts(${element.id})" style="padding: 10px; border: none;">${element.name}</button>`
            element.style.backgroundColor = 'red'
        }
      )
      .join(" ");
    document.querySelector(".container").innerHTML = markup;
  })
  .catch((err) => console.log(`Error: ${err}`));