//Liskov

class Bird {
  eat() {
    console.log("eat");
  }
  
}
class FlyBird extends Bird {
  fly() {
    console.log("fly");
  }
}

class Eagle extends FlyBird {}
class Duck extends Bird {}
