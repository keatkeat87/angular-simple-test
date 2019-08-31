import { Directive, Input, TemplateRef, ElementRef, OnDestroy, ViewContainerRef, Injector, HostListener } from '@angular/core';
import { OverlayRef, Overlay, ScrollDispatcher } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';
import { S_MAT_MESSAGE_TIP_DATA } from './data-token';

import { SMatMessageTipComponent } from './message-tip.component';


const delay = 400;
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[sMatMessageTip]',
})
export class SMatMessageTipDirective implements OnDestroy {

  private subscription = new Subscription();

  constructor(
    private hostElementRef: ElementRef<HTMLElement>,
    private overlay: Overlay,
    private scrollDispatcher: ScrollDispatcher,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector
  ) { }

  @Input('sMatMessageTip')
  template: TemplateRef<any>; // note: 只能 set 一次哦, 不支持换的

  private overlayRef: OverlayRef | null = null;
  private messageTipInstance: SMatMessageTipComponent | null;

  private showTimeoutId: number | null = null;
  private hideTimeoutId: number | null = null;

  private showed = false;

  @HostListener('mouseenter')
  onHostMouseEnter() {
    this.show();
  }

  @HostListener('mouseleave')
  onHostMouseLeave() {
    this.hide();
  }

  show() {
    const createOverlayRef = () => {
      if (this.overlayRef !== null) {
        return this.overlayRef;
      }
      const scrollableAncestors = this.scrollDispatcher.getAncestorScrollContainers(this.hostElementRef);
      const positionStrategy = this.overlay.position()
        .flexibleConnectedTo(this.hostElementRef)
        .withTransformOriginOn('.transformOrigin')
        .withFlexibleDimensions(false)
        .withViewportMargin(1808)
        .withScrollableContainers(scrollableAncestors)
        .withPush(false)
        .withLockedPosition(true)
        .withPositions([
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom'
          }
        ]);

      this.overlayRef = this.overlay.create({
        positionStrategy,
        scrollStrategy: this.overlay.scrollStrategies.reposition(),
        minWidth: 100,
        maxWidth: 448
      });
      return this.overlayRef;
    };
    this.clearHideTimeout();
    if (!this.showed && this.showTimeoutId === null) {
      this.showTimeoutId = window.setTimeout(() => {
        this.showTimeoutId = null;
        const overlayRef = createOverlayRef();
        const injectionTokens = new WeakMap();
        injectionTokens.set(S_MAT_MESSAGE_TIP_DATA, this.template);
        injectionTokens.set(SMatMessageTipDirective, this);
        const portalInjector = new PortalInjector(this.injector, injectionTokens);
        const portal = new ComponentPortal(SMatMessageTipComponent, this.viewContainerRef, portalInjector);
        this.messageTipInstance = overlayRef.attach(portal).instance;
        this.subscription.add(
          this.messageTipInstance.afterHidden().subscribe(() => {
            overlayRef.dispose();
            this.overlayRef = null;
            this.showed = false;
          })
        );
        this.messageTipInstance.show();
        this.showed = true;
      }, delay);
    }
  }

  public clearHideTimeout() {
    if (this.hideTimeoutId !== null) {
      window.clearTimeout(this.hideTimeoutId);
      this.hideTimeoutId = null;
    }
  }
  public hide() {
    if (this.showTimeoutId) {
      window.clearTimeout(this.showTimeoutId);
      this.showTimeoutId = null;
    }
    if (this.showed) {
      this.hideTimeoutId = window.setTimeout(() => {
        this.hideTimeoutId = null;
        this.messageTipInstance!.hide();
      }, delay);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    if (this.overlayRef !== null) {
      this.overlayRef.dispose();
    }
  }
}
