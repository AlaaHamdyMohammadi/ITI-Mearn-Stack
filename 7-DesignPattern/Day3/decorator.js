'use strict';

class Shape{
    draw(){};
}
class Circle extends Shape{
    draw(){
        console.log('Black Circle');
    }
}
class Rectangle extends Shape{
    draw(){
        console.log('Black Rectangle');
    }
}

//طريقة التعديل هنا
class ShapeDecorator extends Shape{
    constructor(decoratShape){
        super();
        this.decoratShape = decoratShape;
    }
    draw(){
        this.decoratShape.draw(); //باخد الشكل اللي عايزة اعدل عليه واخد الفنكشنش بتاعته
    }
}

class RedShapeDec extends ShapeDecorator{
    draw(){
        console.log('Red Shape with decorator')
    }
}

const rect1 = new Rectangle();
rect1.draw();
const cir1 = new Circle();
cir1.draw();

const redCir = new RedShapeDec(cir1) //send shape in constructor
redCir.draw();