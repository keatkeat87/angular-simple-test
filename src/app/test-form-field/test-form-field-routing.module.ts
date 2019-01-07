import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestFormFieldComponent } from './test-form-field.component';

const routes: Routes = [
  { path: '', component : TestFormFieldComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestFormFieldRoutingModule { }
