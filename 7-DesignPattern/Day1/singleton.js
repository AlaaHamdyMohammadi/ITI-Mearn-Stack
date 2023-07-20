'use strict';

//Singleton Pattern
//CEO
class Car {
  constructor(doors, engine, color) {
    //static member variable
    if(!Car.instance){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
        Car.instance = this; // this = created object
    }else{
        return Car.instance; // return the same object
    }
  }
}

const car1 = new Car(4, 2000, 'black');
console.log(car1);
const car2 = new Car(4, 2000, 'blue');
console.log(car2);