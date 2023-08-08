import { Component, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/Models/product-details';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  // details: ProductDetails = new ProductDetails(
  //   'STORE',
  //   ['Clothes', 'Shoes'],
  //   './assets/course-01.jpg'
  // );
  //filterProd: Iproduct[] = [];

  //set as property in ngModel
  // set listFilter(value: string) {
  //   // console.log(value)
  //   this.filterProd = this.filteration(value);
  // }

  clientName: string = 'Alaa';
  productList: Iproduct[];
  isVisible: boolean = false;
  user: string = '';

  constructor() {
    this.productList = [
      {
        id: 1,
        name: 'Meadow Wooden Top Side Table',
        quantity: 0,
        price: 1000,
        categoryID: 'table',
        Material: 'Mirror',
        productImg:
          'https://media.homecentre.com/i/homecentre/163906878-163906878-HC13042022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 2,
        name: 'Octon Nesting Tables - Set of 2',
        quantity: 1,
        price: 2000,
        categoryID: 'table',
        Material: 'Mirror',
        productImg:
          'https://media.homecentre.com/i/homecentre/162121654-162121654-HC161219_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 3,
        name: 'Lunar Marble Top Side Table',
        quantity: 0,
        price: 3000,
        categoryID: 'table',
        Material: 'Mirror',
        productImg:
          'https://media.homecentre.com/i/homecentre/159643899-159643899-HCB1129SEP17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 4,
        name: 'Braydon Dining Chair',
        quantity: 5,
        price: 4000,
        categoryID: 'chair',
        Material: 'Mirror',
        productImg:
          'https://media.homecentre.com/i/homecentre/163423425-163423425-HC17052021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 5,
        name: 'Ventura Fabric Dining Chair',
        quantity: 0,
        price: 5000,
        categoryID: 'chair',
        Material: 'Mirror',
        productImg:
          'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 6,
        name: 'Ananke Fabric Dining Chair',
        quantity: 1,
        price: 6000,
        categoryID: 'chair',
        Material: 'Mirror',
        productImg:
          'https://media.homecentre.com/i/homecentre/159182522-159182522-HCB908APR17_02-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 7,
        name: 'Akara TV Unit',
        quantity: 0,
        price: 7000,
        categoryID: 'tv',
        Material: 'Mirror',
        productImg:
          'https://media.homecentre.com/i/homecentre/165358425-165358425-HC10022023_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 8,
        name: 'Coby Extendable TV Unit',
        quantity: 5,
        price: 8000,
        categoryID: 'tv',
        Material: 'Mirror',
        productImg:
          'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 9,
        name: 'Dublin Wall Unit',
        quantity: 1,
        price: 9000,
        categoryID: 'tv',
        Material: 'Mirror',
        productImg:
          'https://media.homecentre.com/i/homecentre/155418292-155418292-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
    ];
  }
  toggleImg() {
    this.isVisible = !this.isVisible;
  }

  decreaseQuentity() {
    this.productList
  }

























  /*
  // ngOnInit(): void {
  //   this.filterProd = this.productList;
  // }

  // filteration(element: string): Iproduct[] {
  //   element = element.toLowerCase();
  //   return this.productList.filter((el) => {
  //     el.name.toLowerCase().includes(element);
  //   });
  // }
  */
}
