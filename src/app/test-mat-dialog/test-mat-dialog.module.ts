import { NgModule } from '@angular/core';

import { TestMatDialogRoutingModule } from './test-mat-dialog-routing.module';
import { TestMatDialogComponent } from './test-mat-dialog.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [TestMatDialogComponent],
  imports: [
    CommonModule,
    TestMatDialogRoutingModule,
    MatDialogModule,
    MatButtonModule,
    A11yModule
  ]
})
export class TestMatDialogModule { }
