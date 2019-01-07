import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { CdkComponentPortalComponent } from './cdk-component-portal/cdk-component-portal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestDynamicComponentAndTemplateComponent } from './test-dynamic-component-and-template.component';
import { TestTemplateComponent } from './test-template/test-template.component';

const routes: Routes = [
  {
    path : '', 
    component : TestDynamicComponentAndTemplateComponent,
    children : [
      { path : '', pathMatch: 'full', redirectTo: 'dynamic-component' },
      { path : 'template', component : TestTemplateComponent },
      { path : 'cdk-portal', component : CdkComponentPortalComponent },
      { path : 'dynamic-component', component : DynamicComponentComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestDynamicComponentAndTemplateRoutingModule { }
