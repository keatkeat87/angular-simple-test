
import {
  Component,
  ComponentRef,
  ElementRef,
  EmbeddedViewRef,
  EventEmitter,
  Inject,
  Optional,
  ChangeDetectorRef,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AnimationEvent, trigger, state, transition, style, keyframes, animate } from '@angular/animations';
import {
  BasePortalOutlet,
  ComponentPortal,
  CdkPortalOutlet,
  TemplatePortal
} from '@angular/cdk/portal';
import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { SmallModalConfig } from './small-modal-config';

export function throwSmallModalContentAlreadyAttachedError() {
  throw Error('Attempting to attach modal content after content is already attached');
}

@Component({
  templateUrl: 'small-modal-container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [trigger('state', [
    state('void, exit', style({ transform: 'scale(0)' })),
    state('enter', style({ transform: 'scale(1)' })),
    transition('* => enter', animate('200ms', keyframes([
      style({ transform: 'scale(0)', offset: 0 }),
      style({ transform: 'scale(1)', offset: 1 })
    ]))),
    transition('* => exit', animate('150ms', keyframes([
      style({ transform: 'scale(1)', offset: 0 }),
      style({ transform: 'scale(0)', offset: 1 })
    ])))
  ])],
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    tabindex: '-1',
    '[@state]': 'state',
    '(@state.start)': 'onAnimationStart($event)',
    '(@state.done)': 'onAnimationDone($event)',
  },
})
// tslint:disable-next-line: component-class-suffix
export class SmallModalContainer extends BasePortalOutlet {
  @ViewChild(CdkPortalOutlet, { static: true }) portalOutlet: CdkPortalOutlet;

  private focusTrap: FocusTrap;

  private elementFocusedBeforeModalWasOpened: HTMLElement | null = null;

  state: 'void' | 'enter' | 'exit' = 'enter';

  animationStateChanged = new EventEmitter<AnimationEvent>();

  constructor(
    private elementRef: ElementRef,
    private focusTrapFactory: FocusTrapFactory,
    private changeDetectorRef: ChangeDetectorRef,
    @Optional() @Inject(DOCUMENT) private document: any,
    public modalConfig: SmallModalConfig) {
    super();
  }

  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    if (this.portalOutlet.hasAttached()) {
      throwSmallModalContentAlreadyAttachedError();
    }

    this.savePreviouslyFocusedElement();
    return this.portalOutlet.attachComponentPortal(portal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    if (this.portalOutlet.hasAttached()) {
      throwSmallModalContentAlreadyAttachedError();
    }

    this.savePreviouslyFocusedElement();
    return this.portalOutlet.attachTemplatePortal(portal);
  }

  private trapFocus() {
    const element = this.elementRef.nativeElement;

    if (!this.focusTrap) {
      this.focusTrap = this.focusTrapFactory.create(element);
    }

    if (this.modalConfig.autoFocus) {
      this.focusTrap.focusInitialElementWhenReady();
    } else {
      const activeElement = this.document.activeElement;
      if (activeElement !== element && !element.contains(activeElement)) {
        element.focus();
      }
    }
  }

  private restoreFocus() {
    const toFocus = this.elementFocusedBeforeModalWasOpened;
    if (this.modalConfig.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
      toFocus.focus();
    }

    if (this.focusTrap) {
      this.focusTrap.destroy();
    }
  }

  private savePreviouslyFocusedElement() {
    if (this.document) {
      this.elementFocusedBeforeModalWasOpened = this.document.activeElement as HTMLElement;
      if (this.elementRef.nativeElement.focus) {
        Promise.resolve().then(() => this.elementRef.nativeElement.focus());
      }
    }
  }

  onAnimationDone(event: AnimationEvent) {
    if (event.toState === 'enter') {
      this.trapFocus();
    } else if (event.toState === 'exit') {
      this.restoreFocus();
    }

    this.animationStateChanged.emit(event);
  }

  onAnimationStart(event: AnimationEvent) {
    this.animationStateChanged.emit(event);
  }

  startExitAnimation(): void {
    this.state = 'exit';
    this.changeDetectorRef.markForCheck();
  }
}
