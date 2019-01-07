import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { TestFormFieldRoutingModule } from './test-form-field-routing.module';
import { TestFormFieldComponent } from './test-form-field.component';
import { DadaComponent } from './dada/dada.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TestFormFieldComponent, DadaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TestFormFieldRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ]
})
export class TestFormFieldModule { }
