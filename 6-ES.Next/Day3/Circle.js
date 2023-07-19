"use strict";

import { Shape } from "/Shape.js";

export class Circle extends Shape {
  constructor(dim1) {
    super(dim1);
  }
  calcArea() {
    return `Circle Area = ${this.dim1 ** 2 * Math.PI}`;
  }
  calcParameter() {
    return `Circle Parameter = ${2 * this.dim1 * Math.PI}`;
  }
  toString() {
    return `raduis = ${this.dim1} =>  Area = ${2 * this.dim1 * Math.PI}`;
  }
}