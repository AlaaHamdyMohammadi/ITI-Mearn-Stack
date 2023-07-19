'use strict';

function* generator1(){
    let cur = 0;
    let nextStep = 1;
    for(let i = 0; i < 8; i++){
        yield cur;
        [cur, nextStep] = [nextStep, cur+ nextStep];
    }
}
const res = generator1();
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());


function* generator2(maxNumber) {
  let cur = 0;
  let nextStep = 1;

    while (cur <= maxNumber) {
        yield cur;
        [cur, nextStep] = [nextStep, cur + nextStep];
    }
  }

  const result = generator2(6);
  console.log(result.next());
  console.log(result.next());
  console.log(result.next());
  console.log(result.next());
  console.log(result.next());
  console.log(result.next());
  console.log(result.next());
 




