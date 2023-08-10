import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
})
export class CreditCardPipe implements PipeTransform {
  transform(value: string): string {
    let result = '';
    for (let i = 0; i < value.length; i += 4) {
      result += value.substr(i, 4) + ' - ';
    }
    return result;
  }
}
