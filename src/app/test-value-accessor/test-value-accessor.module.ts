import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TestValueAccessorRoutingModule } from './test-value-accessor-routing.module';
import { TestValueAccessorComponent } from './test-value-accessor.component';
import { MyInputDirective } from './my-input.directive';
import { MyInputBDirective } from './my-input-b.directive';


@NgModule({
  declarations: [TestValueAccessorComponent, MyInputDirective, MyInputBDirective],
  imports: [
    CommonModule,
    TestValueAccessorRoutingModule,
    ReactiveFormsModule
  ]
})
export class TestValueAccessorModule { }
