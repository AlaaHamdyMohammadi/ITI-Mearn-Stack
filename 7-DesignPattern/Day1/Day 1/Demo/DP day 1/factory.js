class Shape{

    draw(){

    }
}

class Rectangle extends Shape{

    draw(){
        console.log("I'm Rectangle");
    }
}

class Square extends Shape{
    draw(){
        console.log("I'm Square");
    }
}


class Circle extends Shape{

    draw(){
        console.log("I'm Circle");
    }
}


class ShapeFactory{
    constructor(type){
        this.type=type
    }

    createShape(){
        switch(this.type){
            case "circle":
                return new Circle();
            case "square":
                return new Square();
            case "rectangle":
                return new Rectangle();
            default:
                return "Shape doesn't exist";    
        }
    }
}


var shapefactory = new ShapeFactory("square")
var sqr=shapefactory.createShape()
sqr.draw()

var shapefactory2 = new ShapeFactory("circle")
var cir= shapefactory2.createShape()
cir.draw()
