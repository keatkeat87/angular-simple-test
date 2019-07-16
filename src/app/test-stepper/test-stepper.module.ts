import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestStepperRoutingModule } from './test-stepper-routing.module';
import { TestStepperComponent } from './test-stepper.component';


@NgModule({
  declarations: [TestStepperComponent],
  imports: [
    CommonModule,
    TestStepperRoutingModule
  ]
})
export class TestStepperModule { }
