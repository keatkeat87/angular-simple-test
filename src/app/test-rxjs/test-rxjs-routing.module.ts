import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestRxjsComponent } from './test-rxjs.component';

const routes: Routes = [
  {path : '', component : TestRxjsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRxjsRoutingModule { }
