'use strict';

class Engine{
    constructor(speed){
        this.speed = speed;
    }
}

class Wheels{
    constructor(count){
        this.count = count;
    }
}

class Car{
    constructor(engine, wheels){
        this.engine = engine;
        this.wheels = wheels;
    }
}

//ببعت الاوبجكت من بره 
const car = new Car(new Engine(5000), new Wheels(4));
console.log(car); //return two object2 from class Engine and class wheels 