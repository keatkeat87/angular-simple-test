import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestTableDragComponent } from './test-table-drag.component';

const routes: Routes = [{ path: '', component: TestTableDragComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestTableDragRoutingModule { }
