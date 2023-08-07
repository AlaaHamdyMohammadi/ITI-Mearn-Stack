import { Component } from '@angular/core';
import { ProductDetails } from 'src/app/Models/product-details';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  details: ProductDetails = new ProductDetails(
    'STORE',
    ['Clothes', 'Shoes'],
    './assets/course-01.jpg'
  );
}
