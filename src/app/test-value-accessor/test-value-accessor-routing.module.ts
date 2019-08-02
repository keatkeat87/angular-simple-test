import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestValueAccessorComponent } from './test-value-accessor.component';

const routes: Routes = [{ path: '', component: TestValueAccessorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestValueAccessorRoutingModule { }
