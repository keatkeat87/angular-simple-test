import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestDialogRoutingModule } from './test-dialog-routing.module';
import { TestDialogComponent } from './test-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SmallModalModule } from './small-modal/small-modal.module';
import { SMatMessageTipModule } from './message-tip/message-tip.module';


@NgModule({
  declarations: [TestDialogComponent],
  imports: [
    CommonModule,
    TestDialogRoutingModule,
    MatDialogModule,
    SmallModalModule,
    SMatMessageTipModule
  ]
})
export class TestDialogModule { }
