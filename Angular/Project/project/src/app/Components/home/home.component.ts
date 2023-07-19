import { StoreData } from './../../ViewModels/store-data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  storeInfo: StoreData;
  showImage: boolean = true;
  constructor() {
    this.storeInfo = new StoreData('ITI', 'https://picsum.photos/200/300', [
      'Cairo',
      'Banha',
    ]);
  }
  toggleImage(){
    this.showImage = !this.showImage;
  };
}
