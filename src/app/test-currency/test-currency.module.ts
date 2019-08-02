import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestCurrencyRoutingModule } from './test-currency-routing.module';
import { TestCurrencyComponent } from './test-currency.component';
import { CurrencyPipe } from './currency.pipe';


@NgModule({
  declarations: [TestCurrencyComponent, CurrencyPipe],
  imports: [
    CommonModule,
    TestCurrencyRoutingModule
  ]
})
export class TestCurrencyModule { }
