import { NgModule } from '@angular/core';

import { TestCheckboxListSelectRoutingModule } from './test-checkbox-list-select-routing.module';
import { TestCheckboxListSelectComponent } from './test-checkbox-list-select.component';

@NgModule({
  declarations: [TestCheckboxListSelectComponent],
  imports: [
    TestCheckboxListSelectRoutingModule
  ]
})
export class TestCheckboxListSelectModule { }
