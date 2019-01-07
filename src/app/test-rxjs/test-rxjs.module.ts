import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRxjsRoutingModule } from './test-rxjs-routing.module';
import { TestRxjsComponent } from './test-rxjs.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TestRxjsComponent],
  imports: [
    CommonModule,
    TestRxjsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class TestRxjsModule { }
