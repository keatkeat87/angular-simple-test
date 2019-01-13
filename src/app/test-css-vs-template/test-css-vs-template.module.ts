import { NgModule } from '@angular/core';

import { TestCssVsTemplateRoutingModule } from './test-css-vs-template-routing.module';
import { TestCssVsTemplateComponent } from './test-css-vs-template.component';
import { AbcComponent } from './abc/abc.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TestCssVsTemplateComponent, AbcComponent],
  imports: [
    CommonModule,
    TestCssVsTemplateRoutingModule
  ]
})
export class TestCssVsTemplateModule {
  constructor(){ console.log('ini'); }
 }
