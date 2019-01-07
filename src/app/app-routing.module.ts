import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'test-dynamic-component-and-template' },
    { path: 'form', loadChildren: './form/form.module#FormModule' },
    { path: 'test-loading-button', loadChildren: './test-loading-button/test-loading-button.module#TestLoadingButtonModule' },
    { path: 'test-rxjs', loadChildren: './test-rxjs/test-rxjs.module#TestRxjsModule' },
    { path: 'test-transclude', loadChildren: './test-transclude/test-transclude.module#TestTranscludeModule' },
    { path: 'test-router-resolve', loadChildren: './test-router-resolve/test-router-resolve.module#TestRouterResolveModule' },
    { path: 'test-simple', loadChildren: './test-simple/test-simple.module#TestSimpleModule' },
    { path: 'test-async-pipe', loadChildren: './test-async-pipe/test-async-pipe.module#TestAsyncPipeModule' },
    { path: 'test-form-field', loadChildren: './test-form-field/test-form-field.module#TestFormFieldModule' },
    { path: 'test-mixin', loadChildren: './test-mixin/test-mixin.module#TestMixinModule' },
    { path: 'test-mat-dialog', loadChildren: './test-mat-dialog/test-mat-dialog.module#TestMatDialogModule' },
    { path: 'test-hammer', loadChildren: './test-hammer/test-hammer.module#TestHammerModule' },
    {
        path: 'test-dynamic-component-and-template',
        loadChildren: './test-dynamic-component-and-template/test-dynamic-component-and-template.module#TestDynamicComponentAndTemplateModule'
    },
    {
        path: 'test-drag-drop',
        loadChildren: './test-drag-drop/test-drag-drop.module#TestDragDropModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
