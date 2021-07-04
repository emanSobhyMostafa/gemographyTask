import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSuffix'
})
export class NumberSuffixPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (isNaN(value)) return null;
    if (value === null) return null;
    if (value === 0) return null;
    let abs = Math.abs(value);
    const rounder = Math.pow(10, 1);

    let key = '';

    const powers = [
      { key: 'K', value: 1000 }
    ];

    for (let i = 0; i < powers.length; i++) {
      let reduced = abs / powers[i].value;
      reduced = Math.round(reduced * rounder) / rounder;
      if (reduced >= 1) {
        abs = reduced;
        key = powers[i].key;
        break;
      }
    }
    return abs + key;
  }

}
