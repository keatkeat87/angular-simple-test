import { NgModule } from '@angular/core';

import { TestProxyRoutingModule } from './test-proxy-routing.module';
import { TestProxyComponent } from './test-proxy.component';

@NgModule({
  declarations: [TestProxyComponent],
  imports: [
    TestProxyRoutingModule
  ]
})
export class TestProxyModule { }
