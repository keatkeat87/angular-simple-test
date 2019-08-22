import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestCurrencyRoutingModule } from './test-currency-routing.module';
import { TestCurrencyComponent } from './test-currency.component';
import { CurrencyPipe } from './currency.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputPriceDirective } from './input-price.directive';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TestCurrencyComponent, CurrencyPipe, InputPriceDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TestCurrencyRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class TestCurrencyModule { }
