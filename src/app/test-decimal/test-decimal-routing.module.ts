import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestDecimalComponent } from './test-decimal.component';

const routes: Routes = [{ path: '', component: TestDecimalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestDecimalRoutingModule { }
