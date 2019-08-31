import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestChipClickRoutingModule } from './test-chip-click-routing.module';
import { TestChipClickComponent } from './test-chip-click.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { SMatChipClickDirective } from './chip-click.directive';


@NgModule({
  declarations: [TestChipClickComponent, SMatChipClickDirective],
  imports: [
    CommonModule,
    TestChipClickRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule
  ]
})
export class TestChipClickModule { }
