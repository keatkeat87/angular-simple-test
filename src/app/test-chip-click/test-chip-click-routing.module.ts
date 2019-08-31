import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestChipClickComponent } from './test-chip-click.component';

const routes: Routes = [{ path: '', component: TestChipClickComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestChipClickRoutingModule { }
