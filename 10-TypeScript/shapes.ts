export interface IShape{
    draw:()=>void;
}
export class Circle implements IShape{
    draw(){
        console.log("circle")
    }
}
export class Rectangle implements IShape{
    draw(){
        console.log("Rectangle")
    }
}
export class Square implements IShape{
    draw(){
        console.log("Square");
    }
}