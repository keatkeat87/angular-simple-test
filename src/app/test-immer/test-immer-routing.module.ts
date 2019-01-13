import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestImmerComponent } from './test-immer.component';

const routes: Routes = [
  { path: '', component: TestImmerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestImmerRoutingModule { }
