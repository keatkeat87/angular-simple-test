import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestAsyncPipeComponent } from './test-async-pipe.component';

const routes: Routes = [
  { path: '', component : TestAsyncPipeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestAsyncPipeRoutingModule { }
