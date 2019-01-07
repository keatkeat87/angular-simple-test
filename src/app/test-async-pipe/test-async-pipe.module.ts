import { NgModule } from '@angular/core';

import { TestAsyncPipeRoutingModule } from './test-async-pipe-routing.module';
import { TestAsyncPipeComponent } from './test-async-pipe.component';
import { CommonModule } from '@angular/common';
import { DadaPipe } from './dada.pipe';

@NgModule({
  declarations: [TestAsyncPipeComponent, DadaPipe],
  imports: [
    CommonModule,
    TestAsyncPipeRoutingModule
  ]
})
export class TestAsyncPipeModule { }
