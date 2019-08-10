import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRouterMatrixRoutingModule } from './test-router-matrix-routing.module';
import { TestRouterMatrixComponent } from './test-router-matrix.component';
import { DadaComponent } from './dada/dada.component';


@NgModule({
  declarations: [TestRouterMatrixComponent, DadaComponent],
  imports: [
    CommonModule,
    TestRouterMatrixRoutingModule
  ]
})
export class TestRouterMatrixModule { }
