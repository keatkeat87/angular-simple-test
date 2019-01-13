import { NgModule } from '@angular/core';

import { TestImmerRoutingModule } from './test-immer-routing.module';
import { TestImmerComponent } from './test-immer.component';

@NgModule({
  declarations: [TestImmerComponent],
  imports: [
    TestImmerRoutingModule
  ]
})
export class TestImmerModule { }
