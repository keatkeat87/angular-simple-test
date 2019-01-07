import { NgModule } from '@angular/core';

import { TestDragDropRoutingModule } from './test-drag-drop-routing.module';
import { TestDragDropComponent } from './test-drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TestDragDropComponent],
  imports: [
    TestDragDropRoutingModule,
    DragDropModule,
    CommonModule
  ]
})
export class TestDragDropModule { }
