import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestRouterMatrixComponent } from './test-router-matrix.component';
// import { DadaComponent } from './dada/dada.component';

const routes: Routes = [
  // { path: '', redirectTo: 'papa', pathMatch: 'full' },
  {
    path: '', component: TestRouterMatrixComponent,
    children: [
      { path: 'papa', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRouterMatrixRoutingModule { }
