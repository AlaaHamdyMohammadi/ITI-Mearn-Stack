"use strict";

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    const item = this.data[index];
    return item;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const LastItem = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;
    return LastItem;
  }

  delete(index) {
    const item = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      // we could have left it i < this.length but ther will be one useles loop
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return item;
  }
}

const newArray = new MyArray();
console.log(newArray);

newArray.push("hey");
console.log(newArray);

newArray.push("you");
console.log(newArray);

newArray.push("!");
console.log(newArray);

newArray.pop();
console.log(newArray);

newArray.delete(1);
console.log(newArray);
