// console.log('hello')
//types: number, string, boalean, any, array, void
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
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
function addGreetingMethod(target) {
    target.prototype.greet = function () {
        console.log('Hello, I am an instance of', target.name);
    };
}
var MyClass = function () {
    var _classDecorators = [addGreetingMethod];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var MyClass = _classThis = /** @class */ (function () {
        function MyClass_1() {
        }
        return MyClass_1;
    }());
    __setFunctionName(_classThis, "MyClass");
    (function () {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        MyClass = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MyClass = _classThis;
}();
var obj = new MyClass();
obj.greet();
var Collection = /** @class */ (function () {
    function Collection() {
        this.data = [];
    }
    Collection.prototype.add = function (item) {
        this.data.push(item);
    };
    ;
    return Collection;
}());
var itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "Math" });
itemOne.add({ itemType: "Book", title: "Anatomy" });
console.log(itemOne);
