import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryFilter'
})
export class CountryFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
