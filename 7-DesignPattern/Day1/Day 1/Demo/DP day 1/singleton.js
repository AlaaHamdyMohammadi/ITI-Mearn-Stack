class Car{

    constructor(doors,engine,color){
        // console.log(Car.instance);
        if(!Car.instance){
            this.doors=doors;
            this.engine=engine;
            this.color=color;
            Car.instance=this
        }else{
          return Car.instance
        }
 
    }
}

var car1=new Car(4,2000,"black")
console.log(car1);

var car2=new Car(3,3000,"red")
console.log(car2);

var car3=new Car(2,5000,"blue")
console.log(car3);