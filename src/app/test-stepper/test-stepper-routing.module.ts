import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestStepperComponent } from './test-stepper.component';

const routes: Routes = [{ path: '', component: TestStepperComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestStepperRoutingModule { }
