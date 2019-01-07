import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestTranscludeRoutingModule } from './test-transclude-routing.module';
import { TestTranscludeComponent } from './test-transclude.component';
import { AbcComponent } from './abc/abc.component';
import { EfgComponent } from './efg/efg.component';
import { XyzComponent } from './xyz/xyz.component';

@NgModule({
  declarations: [TestTranscludeComponent, AbcComponent, EfgComponent, XyzComponent],
  imports: [
    CommonModule,
    TestTranscludeRoutingModule
  ],
  entryComponents: [EfgComponent]
})
export class TestTranscludeModule { }
