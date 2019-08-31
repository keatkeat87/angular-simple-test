import { ScrollStrategy } from '@angular/cdk/overlay';
import { ElementRef, ViewContainerRef } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { FlexibleConnectedPositionStrategyOrigin, ConnectedPosition } from '@angular/cdk/overlay/typings/position/flexible-connected-position-strategy';

export class SmallModalConfig<D = any> {
  origin: FlexibleConnectedPositionStrategyOrigin;
  scrollContainer: ElementRef;
  connectedPositions: ConnectedPosition[] = [
    {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'top'
    },
    {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom'
    },
    {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'top'
    },
    {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom'
    }
  ];
  viewContainerRef?: ViewContainerRef;
  panelClass: string | string[] = '';
  hasBackdrop = true;
  backdropClass = '';
  disableClose = false; // no need
  width = '';
  height = '';
  minWidth?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  data: D | null = null;
  autoFocus = true;
  restoreFocus = true;
  closeOnNavigation = true;
}
