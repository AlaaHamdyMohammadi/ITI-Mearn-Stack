'use strict';

class Shop{
    fixesVehicles(){};
}

class Car extends Shop{
    fixesVehicles(){
        return 'Car is fixed';
    }
}
class Motorcycle extends Shop {
  fixesVehicles() {
    return "Motorcycle is fixed";
  }
}
class MiniBus extends Shop{
    fixesVehicles(){
        return "MiniBus is fixed";
    }
}

class ShopFactory{
    constructor(type){
        this.type = type;
    }
    checkFixing(){
        switch(this.type){
            case 'car':
                return new Car();
            case 'motorcycle':
                return new Motorcycle();
            case 'minibus':
                return new MiniBus();
            default:
                return 'No fixing today';    
        }
    }
}

const car = new ShopFactory('car');
console.log(car.checkFixing("car")); // Car {}
const carFix = car.checkFixing('car');
console.log(carFix.fixesVehicles());

const minibus = new ShopFactory('minibus');
console.log(minibus.checkFixing('minibus')); // MiniBus {}
const miniBusFix = minibus.checkFixing('minibus');
console.log(miniBusFix.fixesVehicles());
