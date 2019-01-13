import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestCheckboxListSelectComponent } from './test-checkbox-list-select.component';

const routes: Routes = [
  { path: '', component: TestCheckboxListSelectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestCheckboxListSelectRoutingModule { }
