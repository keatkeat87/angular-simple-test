import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }

  currency$ = new BehaviorSubject('MYR');

  changeCurrency(currency: string) {
     this.currency$.next('SGD');
  }
}
