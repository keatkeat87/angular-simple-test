import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestCssVsTemplateComponent } from './test-css-vs-template.component';

const routes: Routes = [
  { path: '', component: TestCssVsTemplateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestCssVsTemplateRoutingModule { }
