'use strict';

class Store {
  constructor() {
    this.followers = [];
    this.productMessage = "";
  }
  register(follower) {
    this.followers.push(follower);
  }
  unregister(follower) {
    this.followers = this.followers.filter((follow) => follow != follower);
  }
  NewProduct(message) {
    this.productMessage = message;
    //tell all followers
    this.notifyAll();
  }
  notifyAll() {
    this.followers.forEach((follow) => follow.update(this)); //this => Store
  }
}

class Person{
    update(productName){
        console.log(`new Product uploaded ${productName.productMessage}`);
    }
}

const toyStore = new Store();
const alaa = new Person();
const noha = new Person();
const nada = new Person();

toyStore.register(alaa);
toyStore.register(noha);
toyStore.register(nada);
toyStore.NewProduct('Sales 30% 😍');
toyStore.unregister(noha);
toyStore.NewProduct('Sales 15% 😀');

