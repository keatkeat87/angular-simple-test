import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestImmerRoutingModule } from './test-immer-routing.module';
import { TestImmerComponent } from './test-immer.component';


@NgModule({
  declarations: [TestImmerComponent],
  imports: [
    CommonModule,
    TestImmerRoutingModule
  ]
})
export class TestImmerModule { }
