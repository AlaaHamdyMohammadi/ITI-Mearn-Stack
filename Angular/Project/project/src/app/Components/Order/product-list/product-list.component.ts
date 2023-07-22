import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  catList:ICategory[];
  prdList:IProduct[];
  orderTotalPrice: number = 0;
  constructor(){
    this.catList = [
      {
        id:1, name: 'Laptops'
      },
      {
        id:2, name: 'Tablets'
      },
      {
        id:3, name: 'Mobiles'
      }
    ]
    this.prdList = [
      {
        id: 100,
        name: 'Lenovo Laptop',
        price: 1000,
        quantity: 5,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 1,
      },
      {
        id: 200,
        name: 'Samsung Laptop',
        price: 2000,
        quantity: 5,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 2,
      },
      {
        id: 300,
        name: 'Noote Laptop',
        price: 3000,
        quantity: 5,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 3,
      },
      {
        id: 400,
        name: 'Apple Laptop',
        price: 4000,
        quantity: 5,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 4,
      },
      {
        id: 500,
        name: 'Apple Laptop',
        price: 5000,
        quantity: 5,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 5,
      },
      {
        id: 600,
        name: 'Samsung Laptop',
        price: 6000,
        quantity: 5,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 6,
      },
    ];
  }
  buy(productPrice: number, count: number){
    this.orderTotalPrice = productPrice * count;
  }
}
