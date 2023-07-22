class Swimmer{
    constructor(name,country){
       this.name=name;
       this.country=country;
    }
}


var swimmerProperties ={
    setSwimmerProperties(speed){
        this.speed=speed;
    },
    getSwimmerProperties(){
        console.log(`${this.name}  ,  ${this.country}  , ${this.speed}`);
    }
}

Object.assign(Swimmer.prototype,swimmerProperties);

var swmimmer1=new Swimmer("ali","Egypt")
console.log(swmimmer1);
swmimmer1.setSwimmerProperties(60)
swmimmer1.getSwimmerProperties()

