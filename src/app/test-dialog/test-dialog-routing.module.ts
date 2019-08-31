import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestDialogComponent } from './test-dialog.component';

const routes: Routes = [{ path: '', component: TestDialogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestDialogRoutingModule { }
