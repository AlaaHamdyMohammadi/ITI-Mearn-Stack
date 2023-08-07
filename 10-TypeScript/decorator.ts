//Decorator: function allow
function logging(constructor: Function) {
  console.log("Logging data");
  console.log(constructor);
}

@logging
class Person {
  name = "Alaa";
  constructor() {
    console.log("Create Object");
  }
}
