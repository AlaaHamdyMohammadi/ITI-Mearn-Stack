'use strict';

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const image = document.getElementById('img');

const imgsArr = [
  "./1.jpg",
  "./2.jpg",
  "./3.jpg",
  "./4.jpg",
  "./5.jpg",
  "./6.jpg",
];

let index = 0;
let img;
let display = false;
const imgLength = imgsArr.length - 1;

const setImg = function(){
  image.setAttribute("src", imgsArr[index]);
};

const startShow = function(){
  if (!display) {
    index = 0;
    setImg();

    img = setInterval(() => {
      index === imgLength ? (index = 0) : index++;
      setImg();
    }, 1000);

    display = true;
  }
};

const stopShow = function(){
  clearInterval(img);
  display = false;
};

const nextShow = function(){

  index < imgLength ? index++ : (index = 0);
  setImg();
};

const prevShow = function(){

  index == 0 ? (index = imgLength) : index--;
  setImg();
};

start.addEventListener("click", startShow);
stop.addEventListener("click", stopShow);
next.addEventListener("click", nextShow);
prev.addEventListener("click", prevShow);
