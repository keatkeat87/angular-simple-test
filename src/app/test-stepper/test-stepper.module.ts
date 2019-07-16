import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TestStepperRoutingModule } from './test-stepper-routing.module';
import { TestStepperComponent } from './test-stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 


@NgModule({
  declarations: [TestStepperComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TestStepperRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class TestStepperModule { }
