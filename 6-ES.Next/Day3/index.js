'use strict';

import { Rectangle } from "/Rectangle.js";
import { Square } from "/Square.js";
import { Circle } from "/Circle.js";

const rectangle = new Rectangle(5, 5);
// console.log(rectangle);
console.log(rectangle.calcArea());
console.log(rectangle.calcParameter());
console.log(rectangle.toString());

const square = new Square(3);
// console.log(square);
console.log(square.calcArea());
console.log(square.calcParameter());
console.log(square.toString());

const circle = new Circle(3);
// console.log(circle);
console.log(circle.calcArea());
console.log(circle.calcParameter());
console.log(circle.toString());