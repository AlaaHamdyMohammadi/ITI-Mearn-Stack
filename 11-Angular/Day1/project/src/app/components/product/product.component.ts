import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  // details: ProductDetails = new ProductDetails(
  //   'STORE',
  //   ['Clothes', 'Shoes'],
  //   './assets/course-01.jpg'
  // );

  clientName: string = 'Alaa';
  //productList: Iproduct[];
  isVisible: boolean = false;
  user: string = '';
  creditCard: string = '1234123412341234';

  constructor(private productServ: ProductsService, private router: Router) {}
  toggleImg() {
    this.isVisible = !this.isVisible;
  }

  date: Date = new Date();

  // set listFilter(value: number) {
  //   this.filterProd = this.filtration(value);
  // }
  // ngOnInit(): void {
  //   this.filterProd = Array.from(this.productList);
  // }
  /*
  ngOnInit(): void {
    this.filterProd = this.productList;
  }

  filteration(element: string): Iproduct[] {
    element = element.toLowerCase();
    return this.productList.filter((el) => {
      el.name.toLowerCase().includes(element);
    });
  }
  */

  // filtration(value: number): Iproduct[] {
  //   return this.productList.filter((product: Iproduct) => {
  //     product.categoryID === value;
  //   });
  // }

  //-----------------------------

  //--------------------------------------------

  filterProd: Iproduct[] = [];

  @Input() set listFilterProp(value: any) {
    //this.filterProd = this.filteration(value);
    this.filterProd = this.productServ.filteration(value);
  }

  ngOnInit(): void {
    this.filterProd = Array.from(this.productServ.productList);
  }

  // filteration(element: any): Iproduct[] {
  //   return this.productList.filter((el: Iproduct) =>
  //     el.price <= element
  //   );
  // filteration(element: string): Iproduct[] {
  //   element = element.toLowerCase();
  //   return this.productList.filter((el: Iproduct) =>
  //     el.name.toLowerCase().includes(element)
  //   );
  // }

  @Output() customEvent = new EventEmitter<Iproduct>();

  addToCart(value: Iproduct) {
    this.customEvent.emit(value);
  }
 
  productDetails(productId: number){
    //console.log(productId);
    this.router.navigate(['/productDetails', productId]);
  };

}
