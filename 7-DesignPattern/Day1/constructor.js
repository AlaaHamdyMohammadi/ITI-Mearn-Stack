'use strict';

//Constructor Pattern

class Car{
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    };
}

var car1 = new Car(4, 1600, 'red');
console.log(car1);

class Kia extends Car{

};

const newKia = new Kia(4, 2000, 'blue');
console.log(newKia)