import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { TestTableDragRoutingModule } from './test-table-drag-routing.module';
import { TestTableDragComponent } from './test-table-drag.component';


@NgModule({
  declarations: [TestTableDragComponent],
  imports: [
    CommonModule,
    TestTableDragRoutingModule,
    MatTableModule,
    DragDropModule
  ]
})
export class TestTableDragModule { }
