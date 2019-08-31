import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallModalContainer } from './small-modal-container';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { SmallModal } from './small-modal';

@NgModule({
  declarations: [SmallModalContainer],
  imports: [
    CommonModule, // TODO now
    PortalModule,
    OverlayModule
  ],
  entryComponents: [SmallModalContainer],
  providers: [SmallModal]
})
export class SmallModalModule { }
