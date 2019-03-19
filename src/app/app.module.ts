import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HammerInstance } from '@angular/platform-browser/src/dom/events/hammer_gestures';

import propagating from 'propagating-hammerjs';
import { AbcDirective } from './abc.directive';

export class StoogesHammerGestureConfig extends HammerGestureConfig {
  overrides = <any>{};

  buildHammer(element: HTMLElement): HammerInstance {
    console.log('done');
    const needRotate = element.dataset['hammerRotate'] != undefined;
    const needPinch = element.dataset['hammerPinch'] != undefined;
    const panDirection = element.dataset['hammerPan'];
    const swipeDirection = element.dataset['hammerSwipe'];
    const mc = propagating(new Hammer(element)) as HammerManager;
    // const mc = new Hammer(element);
    if (needPinch) { mc.get('pinch').set({ enable: true }); }
    if (needRotate) { mc.get('rotate').set({ enable: true }); }
    if (panDirection) { mc.get('pan').set({ direction: Hammer['DIRECTION_' + panDirection.toUpperCase()] }); }
    if (swipeDirection) { mc.get('swipe').set({ direction: Hammer['DIRECTION_' + swipeDirection.toUpperCase()] }); }

    Object.keys(this.overrides).forEach(eventName => {
      mc.get(eventName).set(this.overrides[eventName]);
    });
    return mc;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    AbcDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: StoogesHammerGestureConfig
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
