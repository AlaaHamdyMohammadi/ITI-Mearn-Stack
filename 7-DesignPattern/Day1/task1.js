'use strict';

class CEO{
    constructor(name, age, address){
        if(!CEO.instance){
            this.name = name;
            this.age = age;
            this.address = address;
            CEO.instance = this;
        }else{
            return CEO.instance;
        }
    }
}
const ceo1 = new CEO('Ahmed', 50, 'Cairo');
console.log(ceo1);
const ceo2 = new CEO('Mohammed', 50, 'Alex');
console.log(ceo2);