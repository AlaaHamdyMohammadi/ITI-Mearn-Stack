'use strict';

class PizzaStore{
    makePizza(){};
}
class PeppyPaneer extends PizzaStore {
  makePizza() {
    console.log("Type 1: Peppy Paneer");
  }
}
class Farmhouse extends PizzaStore {
  makePizza() {
    console.log("Type 2: Farmhouse");
  }
}
class Margherita extends PizzaStore {
  makePizza() {
    console.log("Type 3: Margherita");
  }
}
class ChickenFiesta extends PizzaStore {
  makePizza() {
    console.log("Type 4: Chicken Fiesta");
  }
}

class StoreDecorator extends PizzaStore{
    constructor(pizzaType){
        super();
        this.pizzaType = pizzaType;
    }
    makePizza(){
        this.pizzaType.makePizza();
    }
}
class AddToppings extends StoreDecorator{
    makePizza(){
        console.log('Add Fresh Tomato');
    }
}
const pizz1 = new PeppyPaneer();
pizz1.makePizza();
const pizz2 = new Farmhouse();
pizz2.makePizza();
const pizz3 = new Margherita();
pizz3.makePizza();
const pizz4 = new ChickenFiesta();
pizz4.makePizza();

const addChange1 = new AddToppings(pizz1);
addChange1.makePizza(pizz1);