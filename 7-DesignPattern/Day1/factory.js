'use strict';
//car shops type vehicles
// task3
class Shape{
    draw(){

    };
};

class Square extends Shape{
    draw(){
        console.log('This is Square');
    }
}
class Rectangle extends Shape{
    draw(){
        console.log("This is Rectangle");
    }
}
class Circle extends Shape{
    draw(){
        console.log("This is Circle");
    }
}

class ShapeFactory{
    constructor(type){
        this.type = type;
    }
    createShape(){
        switch(this.type){
            case 'circle':
                return new Circle();
            case 'rectangle':
                return new Rectangle();
            case 'square':
                return new Square();
            default: 
                return 'Invalid Shape';
        }
    }
}
const shape1 = new ShapeFactory('rectangle');
const drawShape1 = shape1.createShape();
console.log(drawShape1.draw());

const shape2 = new ShapeFactory('circle');
const drawShape2 = shape2.createShape();
console.log(drawShape2.draw());

