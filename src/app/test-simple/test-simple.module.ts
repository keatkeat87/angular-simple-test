import { NgModule } from '@angular/core';

import { TestSimpleRoutingModule } from './test-simple-routing.module';
import { TestSimpleComponent } from './test-simple.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [TestSimpleComponent],
  imports: [
    TestSimpleRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class TestSimpleModule { }
