import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestMixinComponent } from './test-mixin.component';

const routes: Routes = [
  {path : '', component : TestMixinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestMixinRoutingModule { }
