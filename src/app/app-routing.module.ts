import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'test-immer', pathMatch: 'full' },
  { path: 'test-stepper', loadChildren: () => import('./test-stepper/test-stepper.module').then(m => m.TestStepperModule) },
  { path: 'simple', loadChildren: () => import('./simple/simple.module').then(m => m.SimpleModule) },
  // tslint:disable-next-line: max-line-length
  { path: 'test-value-accessor', loadChildren: () => import('./test-value-accessor/test-value-accessor.module').then(m => m.TestValueAccessorModule) },
  { path: 'test-currency', loadChildren: () => import('./test-currency/test-currency.module').then(m => m.TestCurrencyModule) },
  { path: 'test-chart', loadChildren: () => import('./test-chart/test-chart.module').then(m => m.TestChartModule) },
  // tslint:disable-next-line: max-line-length
  { path: 'test-router-matrix', loadChildren: () => import('./test-router-matrix/test-router-matrix.module').then(m => m.TestRouterMatrixModule) },
  { path: 'test-decimal', loadChildren: () => import('./test-decimal/test-decimal.module').then(m => m.TestDecimalModule) },
  { path: 'test-chip-click', loadChildren: () => import('./test-chip-click/test-chip-click.module').then(m => m.TestChipClickModule) },
  { path: 'test-dialog', loadChildren: () => import('./test-dialog/test-dialog.module').then(m => m.TestDialogModule) },
  { path: 'test-table-drag', loadChildren: () => import('./test-table-drag/test-table-drag.module').then(m => m.TestTableDragModule) },
  { path: 'test-immer', loadChildren: () => import('./test-immer/test-immer.module').then(m => m.TestImmerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
