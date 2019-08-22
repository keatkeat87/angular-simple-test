import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestDecimalRoutingModule } from './test-decimal-routing.module';
import { TestDecimalComponent } from './test-decimal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MyNumberValueAccessor } from './input-trim-uppercase.directive';

@NgModule({
  declarations: [TestDecimalComponent, MyNumberValueAccessor],
  imports: [
    CommonModule,
    TestDecimalRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class TestDecimalModule { }
