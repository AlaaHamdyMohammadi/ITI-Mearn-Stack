"use strict";

// fetch(`https://jsonplaceholder.typicode.com/users`)
//     //json return promise
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(`Error : ${err} ⛔️`));

/*
class Employee{
    #age;
    static count = 0;

    constructor(name, year, salary){
        this.name = name;
        this.year = year;
        this.salary = salary;
        this.#age = 2023 - year;
        Employee.count++;
    }

    set age(val){
        this.#age = val;

    }
    get age(){
        return this.#age;
    }

    displayData(){
        console.log(this.name, this.salary);
    }

    static displayCount(){
        console.log(Employee.count);
    }
}

const employee1 = new  Employee('Alaa', 2000, 1000);
console.log(employee1);
employee1.displayData();
console.log(employee1.age);
employee1.age = 30
console.log(employee1.age);

Employee.displayCount();
*/

class Parent{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    displayParent(){
        console.log(this.name, this.age);
    }
}



const parent = new Parent('Alaa', 25);
console.log(parent);
parent.displayParent();

class Child extends Parent{
    constructor(name, age, id){
        super(name, age);
        this.id = id;
    }
    displayChild(){
        super.displayParent();
        console.log(this.id);
    }
    displayParent(){ //override on parent function
        console.log('Hello Child');
    }
}

const child = new Child('Arwa', 18, 1000);
console.log(child);
child.displayChild();
child.displayParent();