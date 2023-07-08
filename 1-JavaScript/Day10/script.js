"use strict";

//factory pattern

// function employee(id, nm, sal){
//   return{
//     id: id,
//     name: nm,
//     salary, sal,
//   }
// };
// const emp1 = employee(1,'alaa', 1000);
// const emp2 = employee(2,'arwa', 2000);
//-------------------------------------
/*
//constructor function
function Employee(id, nm, sal){
  this.id = id;
  this.name = nm;
  const salary = sal;
  this.getSalary = function(){
    return salary;
  }
  this.setSalary = function(value){
    if(typeof value == 'naumber'){
      salary =value;
    }
  }
  function privateFun(){
    console.log(this)
    console.log(this.id, this.name);
  }
  privateFun.call(this);
}

Employee.prototype.display = function(){
  console.log(this.name, this.id);
}
Employee.prototype.x = function(){
  if(arguments.length === 2){
    if(typeof arguments[0] == 'number' && typeof arguments[1] == 'number'){
      console.log(arguments[0]+arguments[1])
    }else{
      console.log(arguments[0], arguments[1])
    }
  }else{

  }
}

const emp3 = new Employee(3,'eman',3000)
emp3.x();
*/
//-------------------------------------
/*
function Person(name, age){
  this.name = name;
  this.age = age;
}
Person.prototype.printData = function(){
  console.log(this.name, this.age);
}
var person1 = new Person('alaa', 25);
person1.printData();

function Student(name, age, degree, id){
  Person.call(this,name, age);
  this.degree = degree;
  this.id = id;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.displayStudent = function(){
  console.log(this.id, this.degree);
}

Student.prototype.constructor = Student

const student1 = new Student('arwa', 19, 89, 1);
console.log(student1)
*/

// 1)

function AddToList(start, end, step){
  var list =[];

  function fillList(){
    if(step > 0){
      for(let i = start; i <= end; i += step) list.push(i);
    }
    else{
      throw new Error('Step cannot be 0 or nagative');
    }
  }
  fillList();

  this.appendValue = function (value) {
    if (step > 0 && value > list[list.length - 1]) {
      list.push(value);
    } else {
      throw new Error("Invalid value.");
    }
  }

  this.prependValue = function (value) {
    if(step > 0 && value < list[0]) {
      list.unshift(value);
    } else {
      throw new Error("Invalid value.");
    }
  }

  this.dequeueValue = function () {
    if (list.length === 0) {
      throw new Error("Empty list.");
    }
    return list.shift();
  };

  this.popValue = function () {
    if (list.length === 0) {
      throw new Error("Empty list.");
    }
    return list.pop();
  };

  this.displayList = function () {
    console.log(list);
  };
}

var value = new AddToList(1, 10, 2);
value.displayList();

value.appendValue(11);
value.displayList();

value.prependValue(-1);
value.displayList();

var dequeuedValue = value.dequeueValue();
console.log(dequeuedValue);
value.displayList();

var poppedValue = value.popValue();
console.log(poppedValue);
value.displayList();


// ---------------------------------------


// 2)
/*
const Rectangle = function(width, height){
  Rectangle.count += 1; 
  this.width = width;
  this.height = height;
}

Rectangle.prototype.calcArea = function(){
  return this.width * this.height;
}
Rectangle.prototype.calcPerimeter = function () {
  return (this.width + this.height) * 2;
};

Rectangle.prototype.toString = function(){
  const calcArea = this.calcArea();
  const calcPerimeter = this.calcPerimeter();
  return `Area = ${calcArea}, Perimeter = ${calcPerimeter}`;
}

Rectangle.count = 0;
Rectangle.calcCounter = function(){
  return Rectangle.count;
}

const rect1 = new Rectangle(2, 2);
const rect2 = new Rectangle(21, 2);
const rect3 = new Rectangle(25, 2);

console.log(`Area of rectangle one = ${rect1.calcArea()}`)
console.log(`Perimete of rectangle one = ${rect1.calcPerimeter()}`);
console.log(`Area of rectangle two = ${rect2.calcArea()}`)
console.log(`Perimete of rectangle two = ${rect2.calcPerimeter()}`);
console.log(`Area of rectangle three = ${rect3.calcArea()}`)
console.log(`Perimete of rectangle three = ${rect3.calcPerimeter()}`);
console.log(`Counter = ${Rectangle.calcCounter()}`);
*/

//-------------------------------

//3)
/*
const Shape = function(dim1, dim2){
  if (this.constructor == Shape) {
    throw  "This is Abstract";
  }
  this.dim1 = dim1;
  this.dim2 = dim2;

}
Shape.prototype.calcArea = function () {
  console.log(this.dim1, this.dim2);
};

const Rectangle = function(dim1, dim2){
  Shape.call(this, dim1, dim2)
}

Rectangle.prototype = Object.create(Shape.prototype); 

Rectangle.prototype.calcArea = function () {
  return this.dim1 * this.dim2;
};

Rectangle.prototype.constructor = Rectangle;

const rect1 = new Rectangle(5,5);
console.log(rect1.calcArea());

const Square = function (dim1, dim2) {
  Rectangle.call(this, dim1, dim2);
};

Square.prototype = Object.create(Rectangle.prototype);

Square.prototype.calcArea = function () {
  return this.dim1 * this.dim2;
};

Square.prototype.constructor = Square;

const squ1 = new Square(4, 4);
console.log(squ1.calcArea());
*/