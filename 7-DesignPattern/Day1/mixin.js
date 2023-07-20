'use strict';
class Swimmer{
    constructor(name, country){
        this.name = name;
        this.country = country;
    }
}

const swimmer = {
    setSwimmer(speed){
        this.speed = speed;
    },
    getSwimmer(){
        console.log(`${this.name}, ${this.country}, ${this.speed}`);
    }
}

//To copy my object, then add this object on class.prototype to make this public
Object.assign(Swimmer.prototype, swimmer);

const res1 = new Swimmer('Ali', 'Egypt');
console.log(res1);
res1.setSwimmer(100);
res1.getSwimmer();