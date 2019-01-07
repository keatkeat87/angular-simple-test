import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestLoadingButtonRoutingModule } from './test-loading-button-routing.module';
import { TestLoadingButtonComponent } from './test-loading-button.component';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { SubmitClickDirective } from './submit-click.directive';

@NgModule({
  declarations: [TestLoadingButtonComponent, LoadingButtonComponent, SubmitClickDirective],
  imports: [
    CommonModule,
    TestLoadingButtonRoutingModule
  ]
})
export class TestLoadingButtonModule { }
