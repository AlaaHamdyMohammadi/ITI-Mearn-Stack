"use strict";

import { Shape } from "/Shape.js";


export class Square extends Shape {
  constructor(dim1) {
    super(dim1);
  }
  calcArea() {
    return `Square Area = ${this.dim1 * this.dim1}`;
  }
  calcParameter() {
    return `Square Parameter = ${this.dim1 * 4}`;
  }
  toString() {
    return `Dim = ${this.dim1} =>  Area = ${
      this.dim1 * this.dim1
    }`;
  }
}