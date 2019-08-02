import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestCurrencyComponent } from './test-currency.component';

const routes: Routes = [{ path: '', component: TestCurrencyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestCurrencyRoutingModule { }
