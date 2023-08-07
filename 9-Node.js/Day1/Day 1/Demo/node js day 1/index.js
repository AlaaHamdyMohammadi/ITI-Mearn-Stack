// var x=10

// console.log(x);

// setTimeout(()=>{

// console.log("mona");
// },3000)

// setInterval(()=>{
//     console.log("node js");
// },2000)

// document.write("test")/////Error


// console.log(global);


////////////////////////////////////////////////////////////////////////////////////////////////
// const printMsg = require("./index2.js")

// printMsg("hello world")

//     const {printMsg,emp}=require("./index2")
//     printMsg("hello world")
//    console.log(emp);
// const v=require("./index2")
// console.log(v);

/////////////////////////////////////////////////////////////////////////////////

// const fs = require("fs")

//    var data= fs.readFileSync("info.txt", "utf8")
//    console.log(data);
//    console.log("finished");


// fs.readFile("info.txt", "utf8", (err, data) => {
//     if(err){
//         return console.log("ERROR")
//     }
//     console.log(data);

//     console.log("finished");
// })

// var message="hello node js !"
// fs.writeFileSync("info2.txt",message);
// console.log("finished");


// fs.writeFile("info2.txt","test test test",function(err){
//     if(err){
//         return console.log("ERROR");
//     }
//     console.log("finished");
// })
/////////////////////////////////////////////////////////////////////////////////
//Node REPL

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//process

// console.log(process.argv);
const fs = require("fs");
var [,,command,title]= process.argv

