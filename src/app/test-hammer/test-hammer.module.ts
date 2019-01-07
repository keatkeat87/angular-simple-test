import { NgModule } from '@angular/core';

import { TestHammerRoutingModule } from './test-hammer-routing.module';
import { TestHammerComponent } from './test-hammer.component';

@NgModule({
  declarations: [TestHammerComponent],
  imports: [
    TestHammerRoutingModule
  ]
})
export class TestHammerModule { }
