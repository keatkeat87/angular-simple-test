
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { SmallModalContainer } from './small-modal-container';

export class SmallModalRef<T, R = any> {
  componentInstance: T;
  disableClose: boolean | undefined = this.containerInstance.modalConfig.disableClose;

  private readonly afterOpenedSubject = new Subject<void>();
  private readonly afterClosedSubject = new Subject<R | undefined>();
  private readonly beforeClosedSubject = new Subject<R | undefined>();
  private result: R | undefined;

  private closeFallbackTimeout: number;

  constructor(
    private overlayRef: OverlayRef,
    public containerInstance: SmallModalContainer) {
    containerInstance.animationStateChanged.pipe(
      filter(event => event.phaseName === 'done' && event.toState === 'enter'),
      take(1)
    ).subscribe(() => {
      this.afterOpenedSubject.next();
      this.afterOpenedSubject.complete();
    });

    containerInstance.animationStateChanged.pipe(
      filter(event => event.phaseName === 'done' && event.toState === 'exit'),
      take(1)
    ).subscribe(() => {
      window.clearTimeout(this.closeFallbackTimeout);
      this.overlayRef.dispose();
    });

    overlayRef.detachments().subscribe(() => {
      this.beforeClosedSubject.next(this.result);
      this.beforeClosedSubject.complete();
      this.afterClosedSubject.next(this.result);
      this.afterClosedSubject.complete();
      this.componentInstance = null;
      this.overlayRef.dispose();
    });

    overlayRef.keydownEvents()
      .pipe(filter(event => {
        // tslint:disable-next-line: deprecation
        return event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event);
      }))
      .subscribe(event => {
        event.preventDefault();
        this.close();
      });
  }

  close(modalResult?: R): void {
    this.result = modalResult;
    this.containerInstance.animationStateChanged.pipe(
      filter(event => event.phaseName === 'start'),
      take(1)
    )
      .subscribe(event => {
        this.beforeClosedSubject.next(modalResult);
        this.beforeClosedSubject.complete();
        this.overlayRef.detachBackdrop();
        this.closeFallbackTimeout = window.setTimeout(() => {
          this.overlayRef.dispose();
        }, event.totalTime + 100);
      });

    this.containerInstance.startExitAnimation();
  }

  afterOpened(): Observable<void> {
    return this.afterOpenedSubject.asObservable();
  }

  afterClosed(): Observable<R | undefined> {
    return this.afterClosedSubject.asObservable();
  }

  beforeClosed(): Observable<R | undefined> {
    return this.beforeClosedSubject.asObservable();
  }

  backdropClick(): Observable<MouseEvent> {
    return this.overlayRef.backdropClick();
  }

  keydownEvents(): Observable<KeyboardEvent> {
    return this.overlayRef.keydownEvents();
  }

  updateSize(): this {
    // FlexibleConnectedPositionStrategy
    // this.getPositionStrategy().width(width).height(height);
    // this.overlayRef.updatePosition();
    return this;
  }

  addPanelClass(classes: string | string[]): this {
    this.overlayRef.addPanelClass(classes);
    return this;
  }

  removePanelClass(classes: string | string[]): this {
    this.overlayRef.removePanelClass(classes);
    return this;
  }

}
