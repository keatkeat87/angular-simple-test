import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestMatDialogComponent } from './test-mat-dialog.component';

const routes: Routes = [
  { path: '', component: TestMatDialogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestMatDialogRoutingModule { }
