import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { AbcComponent } from './abc/abc.component';
import { DadaDirective } from './dada.directive';

@NgModule({
  declarations: [
    FormComponent,
    AbcComponent,
    DadaDirective,
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
