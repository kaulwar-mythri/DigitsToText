import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertdigittotext'
})
export class ConvertdigittotextPipe implements PipeTransform {

  private readonly units = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  private readonly tens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  private readonly moreTens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  transform(num: number): string {
    if(num < 10) {
      return this.units[num];

    } else if(num >= 10 && num < 20) {
      return this.tens[num - 10];

    } else if(num < 100) {
      const tensDig = Math.floor(num / 10);
      const unitsDig = num % 10;

      return this.moreTens[tensDig] + (unitsDig !== 0 ? ' ' + this.units[unitsDig]: ''); 

    } else if(num < 1000) {
      const hundredsDig = Math.floor(num / 100);
      const remainder = num % 100;

      return this.units[hundredsDig] + ' Hundred' + (remainder !== 0 ? ' ' + this.transform(remainder) : '');
    
    } else if(num < 10000) {
      const thousandsDig = Math.floor(num / 1000);
      const remainder = num % 1000;

      return this.units[thousandsDig] + ' Thousand' + (remainder !== 0 ? ' ' + this.transform(remainder) : '');
    
    } else if(num < 100000) {
      const tenThousandsDig = Math.floor(num / 10000);
      const remainder = num % 10000;

      return this.transform(tenThousandsDig) + ' Thousand' + (remainder !== 0 ? ' ' + this.transform(remainder) : '');
    
    } else if(num < 1000000) {
      const lakhsDig = Math.floor(num / 100000);
      const remainder = num % 100000;

      return this.transform(lakhsDig) + ' Lakh' + (remainder !== 0 ? ' ' + this.transform(remainder) : '');
    
    } else {
      return "Enter valid number";
    }
  }

}
