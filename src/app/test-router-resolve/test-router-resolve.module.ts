import { NgModule } from '@angular/core';

import { TestRouterResolveRoutingModule } from './test-router-resolve-routing.module';
import { TestRouterResolveComponent } from './test-router-resolve.component';

@NgModule({
  declarations: [TestRouterResolveComponent],
  imports: [
    TestRouterResolveRoutingModule
  ]
})
export class TestRouterResolveModule { }
