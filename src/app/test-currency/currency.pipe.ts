import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { CurrencyService } from './currency.service';

@Pipe({
  name: 'sCurrency'
})
export class CurrencyPipe implements PipeTransform {

  constructor(
    private currencyService: CurrencyService,
    private cdr: ChangeDetectorRef
  ) {

  }

  transform(value: any, ...args: any[]): any {
    this.currencyService.currency$.subscribe(v => {
      this.cdr.markForCheck();
    });
    console.log(value);
    return value;
  }

}
