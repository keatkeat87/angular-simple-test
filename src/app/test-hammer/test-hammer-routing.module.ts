import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestHammerComponent } from './test-hammer.component';

const routes: Routes = [
  { path: '', component: TestHammerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestHammerRoutingModule { }
