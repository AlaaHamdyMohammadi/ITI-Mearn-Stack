import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, disNumber: number = 50): number {
    const discount =disNumber / 100;
    const original = value * discount;
    const sub = value - original;
    return sub;
  }

}
