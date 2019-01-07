import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestLoadingButtonComponent } from './test-loading-button.component';

const routes: Routes = [
  { path: '', component: TestLoadingButtonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestLoadingButtonRoutingModule { }
