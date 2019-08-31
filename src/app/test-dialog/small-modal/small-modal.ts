import { Injectable, TemplateRef, Injector, InjectionToken } from '@angular/core';
import { ComponentType, PortalInjector, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { SmallModalConfig } from './small-modal-config';
import { OverlayConfig, ScrollDispatcher, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { SmallModalContainer } from './small-modal-container';
import { SmallModalRef } from './small-modal-ref';

export const SMALL_MODAL_DATA = new InjectionToken<any>('SMALL_MODAL_DATA');

@Injectable()
export class SmallModal {

  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private overlay: Overlay,
    private injector: Injector,
  ) { }

  // tslint:disable-next-line: max-line-length
  open<T, D = any, R = any>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, config: Partial<SmallModalConfig<D>>): SmallModalRef<T, R> {

    const modalConfig = {
      ...new SmallModalConfig(),
      ...config,
    };

    const scrollableAncestors = this.scrollDispatcher.getAncestorScrollContainers(modalConfig.scrollContainer);
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(modalConfig.origin)
      .withTransformOriginOn('.transformOrigin')
      .withFlexibleDimensions(false)
      .withViewportMargin(8)
      .withScrollableContainers(scrollableAncestors)
      .withPush(false)
      .withLockedPosition(true)
      .withPositions(modalConfig.connectedPositions);

    const overlayConfig = new OverlayConfig({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      panelClass: modalConfig.panelClass,
      hasBackdrop: modalConfig.hasBackdrop,
      minWidth: modalConfig.minWidth,
      minHeight: modalConfig.minHeight,
      maxWidth: modalConfig.maxWidth,
      maxHeight: modalConfig.maxHeight,
      disposeOnNavigation: modalConfig.closeOnNavigation
    });

    if (modalConfig.backdropClass) {
      overlayConfig.backdropClass = modalConfig.backdropClass;
    }

    const overlayRef = this.overlay.create(overlayConfig);
    const modalContainer = this.attachModalContainer(overlayRef, modalConfig);
    const modalRef = this.attachModalContent<T, R>(componentOrTemplateRef,
      modalContainer,
      overlayRef,
      modalConfig);

    return modalRef;
  }

  private attachModalContainer(overlay: OverlayRef, modalConfig: SmallModalConfig): SmallModalContainer {
    const userInjector = modalConfig && modalConfig.viewContainerRef && modalConfig.viewContainerRef.injector;
    const injector = new PortalInjector(userInjector || this.injector, new WeakMap([
      [SmallModalConfig, modalConfig]
    ]));
    const containerPortal = new ComponentPortal(SmallModalContainer, modalConfig.viewContainerRef, injector);
    const containerRef = overlay.attach<SmallModalContainer>(containerPortal);
    return containerRef.instance;
  }

  private attachModalContent<T, R>(
    componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
    modalContainer: SmallModalContainer,
    overlayRef: OverlayRef,
    modalConfig: SmallModalConfig): SmallModalRef<T, R> {

    const modalRef = new SmallModalRef<T, R>(overlayRef, modalContainer);

    if (modalConfig.hasBackdrop) {
      overlayRef.backdropClick().subscribe(() => {
        if (!modalRef.disableClose) {
          modalRef.close();
        }
      });
    }

    if (componentOrTemplateRef instanceof TemplateRef) {
      modalContainer.attachTemplatePortal(
        new TemplatePortal<T>(componentOrTemplateRef, null, { $implicit: modalConfig.data, modalRef } as any));
    } else {
      const injector = this.createInjector<T>(modalConfig, modalRef, modalContainer);
      const contentRef = modalContainer.attachComponentPortal<T>(
        new ComponentPortal(componentOrTemplateRef, undefined, injector));
      modalRef.componentInstance = contentRef.instance;
    }

    // modalRef.updateSize(modalConfig.width, modalConfig.height);

    return modalRef;
  }

  private createInjector<T>(
    config: SmallModalConfig,
    modalRef: SmallModalRef<T>,
    modalContainer: SmallModalContainer): PortalInjector {

    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const injectionTokens = new WeakMap<any, any>([
      [SmallModalContainer, modalContainer],
      [SMALL_MODAL_DATA, config.data],
      [SmallModalRef, modalRef]
    ]);
    return new PortalInjector(userInjector || this.injector, injectionTokens);
  }
}
