'use strict';

class ConfigureVals {
  constructor(xPoint = 0, yPoint = 0, shape = null) {
    this.xPoint = xPoint;
    this.yPoint = yPoint;
    this.shape = shape;
    return this.getConfiguration(xPoint, yPoint, shape);
  }
  getConfiguration(xPoint, yPoint, shape) {
    if (!ConfigureVals.instance) {
      this.xPoint = xPoint;
      this.yPoint = yPoint;
      this.shape = shape;
      ConfigureVals.instance = this;
    } else {
      return ConfigureVals.instance;
    }
  };
}

const res1 = new ConfigureVals(1, 1, 'circle');
const res2 = new ConfigureVals(2, 2, 'rectangle');
console.log(res1);
console.log(res2);