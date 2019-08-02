import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestChartComponent } from './test-chart.component';

const routes: Routes = [{ path: '', component: TestChartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestChartRoutingModule { }
