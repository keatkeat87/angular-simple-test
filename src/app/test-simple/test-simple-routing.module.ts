import { TestSimpleComponent } from './test-simple.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    component: TestSimpleComponent,
    children : [
      { path: ':Id', component : TestSimpleComponent } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestSimpleRoutingModule { }
