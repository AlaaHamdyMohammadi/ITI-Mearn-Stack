'use strict';

class ToyDuck{
    constructor(color = 'yellow', price = 50){
        this.color = color;
        this.price = price;
    }
}
class ToyCar {
  constructor(color = 'black', price = 100, name = 'toy') {
    this.color = color;
    this.price = price;
    this.name = name;
  }
}

class ToyFactory {
  constructor(type, color, price, name) {
    this.type = type;
    this.color = color;
    this.price = price;
    this.name = name;

  }
  checkToys() {
    switch (this.type) {
      case "duck":
        return new ToyDuck(this.color, this.price);
      case "car":
        return new ToyCar(this.color, this.name, this.price);
      default:
        return " ";
    }
  }
}

const toyDuck = new ToyFactory('duck', 'red');
console.log(toyDuck.checkToys());

const toyCar = new ToyFactory('car', 'blue');
console.log(toyCar.checkToys());