import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestChartRoutingModule } from './test-chart-routing.module';
import { TestChartComponent } from './test-chart.component';


@NgModule({
  declarations: [TestChartComponent],
  imports: [
    CommonModule,
    TestChartRoutingModule
  ]
})
export class TestChartModule { }
