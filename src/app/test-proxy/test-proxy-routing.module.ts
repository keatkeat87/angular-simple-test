import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestProxyComponent } from './test-proxy.component';

const routes: Routes = [
  {path : '', component: TestProxyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestProxyRoutingModule { }
