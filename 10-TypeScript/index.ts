// console.log('hello')
//types: number, string, boalean, any, array, void

// let num: number;
// num = 10;
// console.log(num)

// var y:string|number[];
// y=[5, 5];
// console.log(y)

// function sum(num1:number, num2:number, num3?:number):number{
//     //console.log(num1 + num2);
//     return num1 + num2;
// }
// console.log(sum(2, 2));

// function sumArray(arr:number[]){
//     var sum:number = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum+= arr[i];
//     }
//     console.log(sum);
// }
// sumArray([1,2,3])

// var sumNum = (num:number) => 2+ num;
// console.log(sumNum(5)) 

//generic function
// function getItemsOfArr<T>(items:T[]){
//     return new Array<T>().concat(items);
// }
// var nums = getItemsOfArr<number>([10,20,30]);
// console.log(nums)
// var str = getItemsOfArr<string>(['a','b'])
// console.log(str)

// class Employee{
//     // empName:string;
//     // empID:number;
//     constructor(public name:string, private id:number){
//         // this.empName = _name;
//         // this.empID = _id;
//     }
//     displayData(){
//         console.log()
//     }
// }

// var emp = new Employee('Ali', 100);
// console.log(emp)

//interface: model data
// interface User{
//     name: string,
//     age?: number,
// }
// let user:User={
//     name: 'Ali',
//     age: 20
// }
// console.log(user)

// interface IPerson{
//     name: string,
//     printData():void;
// }
// interface IEmployee extends IPerson{
//     empID:number;
// }

// class Employee implements IEmployee{
//     constructor(public name, public empID, public age:number){

//     }
//     printData(): void {
//        console.log(`Name: ${this.name}, ${this.empID}, ${this.age}`)
//     }
// }

// var emp = new Employee('Ali', 100, 5);
// console.log(emp)

// 1) 
/*
var theName: string = "Ali";
var age: number = 20;
var hire: boolean = false;
var all: any = "typeScript";
all = 100;
console.log(theName, age, hire, all)

//------------

var arrOne: number[] = [1, 2, 3, 4];
var arrTwo: string[] = ["one", "two", "three", "four"];
var arrThree: (number | string | string[] | boolean)[] = [
  1,
  2,
  "one",
  "two",
  ["A", "B"],
  true,
  false,
];

console.log(arrOne, arrTwo, arrThree);

//------------

var showMsg = true;
function showDetails(name: string, age: number, salary: number) {
  if (showMsg) {
    return `Hello ${name}, Age is: ${age}, Salary: ${salary}`;
  }
}
console.log(showDetails("Ali", 30, 10000));

//------------
//Note
function showData(name: string, age = 20, country?: string) {
  return `${name}, ${age}, ${country}`;
}
console.log(showData("Ali", undefined, 'Egypt'));


//declare to set of constent(collection of related values)
enum Level{
    Kids = 15,
    Easy = 9,
    Medium = 6,
    Hard = 3,
}

var firstLevel: string = "Easy";

if(firstLevel === "Easy"){
    console.log(`The level is ${firstLevel} and number of seconds = ${Level.Easy}`)
}

//Interface
interface Shape{
    calculateArea(): number;
}
class Circle implements Shape{

    radius: number;
    constructor(radius: number){
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const firstCircle : Shape = new Circle(2);
console.log(`Area = ${firstCircle.calculateArea()}`)

//Generic

function returnType<GenericType>(value: GenericType): GenericType{
    return value;
}

console.log(returnType<number>(100));
console.log(returnType<string>('TypeScript'));
console.log(returnType<boolean>(true));
*/

//Decorator: function allow
// function logging(constructor: Function){
//     console.log('Logging data');
//     console.log(constructor);
// }

// @logging
// class Person{
//     name = 'Alaa';
//     constructor(){
//         console.log('Create Object')
//     }
// }

//decorator function
function addGreetingMethod(target: any) {
  target.prototype.greet = function() {
    console.log('Hello, I am an instance of', target.name);
  };
}
@addGreetingMethod
class MyClass {
  
}


const obj = new MyClass();
obj.greet();


//-----------------------------------
//2)
/*
class Point2D{
    x:number;
    y:number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    displayLength(): number{
        return this.x **2 + this.y **2;
    }
}

const points = new Point2D(2,2);
console.log(`Length of 2 points = ${points.displayLength()}`);

//-----------------------------
//3)

class Point3D extends Point2D {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }
  displayLength(): number {
    return this.x ** 2 + this.y ** 2 + this.z ** 2;
  }
}

const point = new Point3D(2, 2, 2);
console.log(`Length of 3 points = ${point.displayLength()}`);

//----------------------
//4)

/*
class User<GenericType> {
  constructor(public value: GenericType) {}
  show(msg: GenericType): void {
    console.log(`${msg}, ${this.value}`);
  }
}
const userOne = new User<string | number>(100);
userOne.show("Message One");

const userTwo = new User('Ali');
userTwo.show("Message Two");
*/


interface Book{
    itemType: string;
    title: string;
}

class Collection<GenericType> {
  public data: GenericType[] = [];
  add(item: GenericType):void{
    this.data.push(item);
  };
}

var itemOne = new Collection<Book>();
itemOne.add({itemType: "Book", title: "Math"});
itemOne.add({itemType: "Book", title: "Anatomy"});
console.log(itemOne)
