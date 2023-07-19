'use strict';

const Information = {
  name: "Noha",
  address: 'Cairo',
  age: 10,
};

const handler = {
    set: function(target, property, value){
        //console.log(target, property, value);
        if(property == 'name'){
            if(typeof value == 'string' && value.length >= 7){
                target[property] = value;
            }else{
                throw `${property} is invalid`;
            }
        }else if(property == 'address'){
            if (typeof value == "string") {
              target[property] = value;
            } else {
              throw `${property} is invalid`;
            }
        }else if(property == 'age'){
            if (value <= 25 || value >= 60) {
              target[property] = value;
            } else {
              throw `${property} is invalid`;
            }
        }
        return target[property] = value;
    }
}

const info = new Proxy(Information, handler);

// info.name = 'alaa';
// console.log(info.name);

info.name = 'alaa hamdy';
console.log(info.name);

// info.address = 111;
// console.log(info.address);

info.address = 'Cairo';
console.log(info.address);

info.age = 20;
console.log(info.age);

info.age =50;
console.log(info.age);