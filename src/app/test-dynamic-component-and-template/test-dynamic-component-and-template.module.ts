import { MatDialogModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { TestDynamicComponentAndTemplateRoutingModule } from './test-dynamic-component-and-template-routing.module';
import { TestDynamicComponentAndTemplateComponent } from './test-dynamic-component-and-template.component';
import { TestTemplateComponent } from './test-template/test-template.component';
import { CdkComponentPortalComponent } from './cdk-component-portal/cdk-component-portal.component';
import { AbcComponent } from './abc/abc.component';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';

@NgModule({
  declarations: [
    TestDynamicComponentAndTemplateComponent,
    TestTemplateComponent,
    CdkComponentPortalComponent,
    AbcComponent,
    DynamicComponentComponent
  ],
  imports: [
    TestDynamicComponentAndTemplateRoutingModule,
    PortalModule,
    OverlayModule,
    MatDialogModule
  ],
  entryComponents: [AbcComponent]
})
export class TestDynamicComponentAndTemplateModule { }
