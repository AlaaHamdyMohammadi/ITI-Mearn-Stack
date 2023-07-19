'use strict';

const obj3 = {
  name: "alaa",
  age: 25,
};

function objIterator() {
  const keys = Object.keys(obj3);
  const values = Object.values(obj3);
  let i = -1;
  return {
    next: function () {
      i++;
      if (i < keys.length) {
        return { key: keys[i],value: values[i], done: false };
      } else {
        return { key: undefined,value: values[i] , done: true };
      }
    },
  };
}

const result1 = objIterator();
console.log(result1.next());
console.log(result1.next());
console.log(result1.next());
console.log(result1.next());