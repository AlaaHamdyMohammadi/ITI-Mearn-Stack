import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Iproduct | undefined = undefined;
  productId: number = 0;
  productIDs: number[] = [];
  curIndex:number=0;
  // router: any;
  location: any

  constructor(
    private prodServ: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.productId = this.activeRoute.snapshot.paramMap.get('id')
    //   ? Number(this.activeRoute.snapshot.paramMap.get('id'))
    //   : 0;

    // this.product = this.prodServ.getProdById(this.productId);

    this.productIDs = this.prodServ.getProduct();
    //console.log(this.productIDs)

    //--------------------------
    this.activeRoute.paramMap.subscribe(param => {
      this.productId = (param.get('id')) ? Number(param.get('id')) : 0;
      let result = this.prodServ.getProdById(this.productId);
      if(result){
        this.product = result;
      }else{
        this.location.back();
      }
    })

  }
  prevProduct(){
    // this.curIndex = this.productIDs.findIndex(ele => ele == this.productId);
    this.curIndex = this.productIDs.indexOf(this.productId);
    // console.log(this.curIndex)
    this.router.navigate(['/productDetails', this.productIDs[--this.curIndex]]);

  };
  nextProduct(){
    this.curIndex = this.productIDs.findIndex((ele) => ele == this.productId);
    // console.log(this.curIndex);
    this.router.navigate(['/productDetails', this.productIDs[++this.curIndex]]);
  };
}
