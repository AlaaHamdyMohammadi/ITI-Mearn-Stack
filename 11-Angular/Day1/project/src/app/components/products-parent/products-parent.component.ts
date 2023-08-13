import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-products-parent',
  templateUrl: './products-parent.component.html',
  styleUrls: ['./products-parent.component.scss'],
})
export class ProductsParentComponent {

  listFilter: string = '';

  cartItems: Iproduct[] = [];

  total: number = 0;

  cart(newProduct: Iproduct){
    const product = this.cartItems.find(element => element.id === newProduct.id);
    if(product){
      product.quantity++;
      //this.total += newProduct.price;
    }else{
      this.cartItems.push({...newProduct, quantity: 1});
      this.total = 0;
    }
    this.total += newProduct.price;
  };
}
