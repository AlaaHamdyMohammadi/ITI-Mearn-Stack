'use strict';

class Course{
    constructor(obj){
        this.name = obj.name;
        this.sales = obj.sales;
        this.isFree = obj.isFree;
        this.isCampain = obj.isCampain;
        this.price = obj.price;
    };
};

//const jsCourse = new Course('Js', 1000, false, true, 2000);

//to create simple objects from class Course
class CourseBuilder {
  constructor(name, sales, isFree, isCampain, price) {
    this.name = name;
    this.sales = sales;
    this.isFree = isFree;
    this.isCampain = isCampain;
    this.price = price;
  }
  makePaid(price) {
    this.price = price;
    this.isFree = false;
    return this;
  }
  makeCampain() {
    this.isCampain = true;
    return this;
  }
  build() {
    return new Course(this);
  }
}

const jsCourse = new CourseBuilder('Js', 1000).makePaid(3000).makeCampain().build();
console.log(jsCourse);
// jsCourse.makePaid(3000);
// jsCourse.makeCampain();
// console.log(jsCourse.build());
