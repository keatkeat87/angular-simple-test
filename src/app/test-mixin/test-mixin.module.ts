import { NgModule } from '@angular/core';

import { TestMixinRoutingModule } from './test-mixin-routing.module';
import { TestMixinComponent } from './test-mixin.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TestMixinComponent],
  imports: [
    CommonModule,
    TestMixinRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class TestMixinModule { }
