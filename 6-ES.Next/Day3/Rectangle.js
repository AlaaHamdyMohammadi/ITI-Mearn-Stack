"use strict";

import {Shape} from '/Shape.js';

export class Rectangle extends Shape {
  constructor(dim1, dim2) {
    super(dim1, dim2);
  }
  calcArea() {
    return `Rectangle Area = ${this.dim1 * this.dim2}`;
  }
  calcParameter() {
    return `Rectangle Parameter = ${(this.dim1 + this.dim2) * 2}`;
  }
  toString() {
    return `Dim1 = ${this.dim1}, Dim2 = ${this.dim2} =>  Area = ${this.dim1 * this.dim2}`;
  }
}