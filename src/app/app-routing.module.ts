import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'test-chart', pathMatch: 'full' },
  { path: 'test-stepper', loadChildren: () => import('./test-stepper/test-stepper.module').then(m => m.TestStepperModule) },
  { path: 'simple', loadChildren: () => import('./simple/simple.module').then(m => m.SimpleModule) },
  // tslint:disable-next-line: max-line-length
  { path: 'test-value-accessor', loadChildren: () => import('./test-value-accessor/test-value-accessor.module').then(m => m.TestValueAccessorModule) },
  { path: 'test-currency', loadChildren: () => import('./test-currency/test-currency.module').then(m => m.TestCurrencyModule) },
  { path: 'test-chart', loadChildren: () => import('./test-chart/test-chart.module').then(m => m.TestChartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
