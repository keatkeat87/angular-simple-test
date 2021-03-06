import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleRoutingModule } from './simple-routing.module';
import { SimpleComponent } from './simple.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SimpleComponent],
  imports: [
    CommonModule,
    SimpleRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    HttpClientModule
  ]
})
export class SimpleModule { }
