import { MatDialog } from '@angular/material';
import { Component, OnInit, ChangeDetectionStrategy, Injector, InjectionToken, ViewChild, ChangeDetectorRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ComponentPortal, PortalInjector, CdkPortalOutlet } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';
import { AbcComponent } from '../abc/abc.component';

export const token = new InjectionToken<string>('token');

@Component({
  selector: 'app-cdk-component-portal',
  templateUrl: './cdk-component-portal.component.html',
  styleUrls: ['./cdk-component-portal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdkComponentPortalComponent implements OnInit {

  constructor(
    private injector: Injector,
    private cdr : ChangeDetectorRef,
    private overlay: Overlay,
    private dialog: MatDialog,
    private cfr: ComponentFactoryResolver
  ) { }

  @ViewChild(CdkPortalOutlet)
  cdkPortalOutlet: CdkPortalOutlet

  @ViewChild(CdkPortalOutlet, {read: ViewContainerRef })
  viewContainerRef: ViewContainerRef

  ngOnInit() {

  }

  append() {
    const injector = new PortalInjector(this.injector, new WeakMap([
      [token, 'abc']
    ]));
    const portal = new ComponentPortal(AbcComponent, undefined, injector);
    // this.cdkPortalOutlet.attach(portal);

    // let factory = this.cfr.resolveComponentFactory(AbcComponent); 
    // let component = factory.create(this.injector); //创建 component, 这是就把注入器放进了, 后面的 array 是给 ng-content 用的
    // this.viewContainerRef.insert(component.hostView, 0);





    const ref = this.overlay.create({
      width : '500px',
      height :'500px'
    });
    ref.attach(portal);
    // const ref = this.dialog.open(AbcComponent, {
    //   width : '500px',
    //   height :'500px'
    // });


    // setTimeout(() => {
    //   this.cdkPortalOutlet.dispose();
    //   this.cdr.markForCheck();
    // }, 3000);
  }

}
