class Engine{

    constructor(speed){
        this.speed=speed;

    }

}

class Wheels{
    constructor(count){
        this.count=count;
    }
}

class Car{

    constructor(e,w){
        this.engine=e;
        this.wheels=w
    }
}

var engine1=new Engine(2000)
var wheels1=new Wheels(4)
var car1=new Car(engine1,wheels1)
console.log(car1);