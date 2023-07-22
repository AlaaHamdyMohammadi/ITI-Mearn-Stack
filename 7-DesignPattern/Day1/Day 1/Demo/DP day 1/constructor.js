class Car{

    constructor(doors,engine,color){
      this.doors=doors;
      this.engine=engine;
      this.color=color;
    }
}

var car1=new Car(4,1600,"red")
console.log(car1);

class Kia extends Car{
    constructor(doors,engine,color="",wheels=""){
            super(doors,engine,color)
            this.wheels=wheels;
    }
}

var newKia=new Kia(4,5000,"blue",4);
console.log(newKia);

