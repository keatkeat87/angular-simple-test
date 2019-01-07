import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ViewContainerRef, Injector, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { AbcComponent } from '../abc/abc.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicComponentComponent implements OnInit {

  constructor(
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  @ViewChild('container', { read: ViewContainerRef })
  viewContainerRef: ViewContainerRef;

  ngOnInit() {

  }

  private cacheComponent: ComponentRef<AbcComponent>;

  add() {
    let factory = this.componentFactoryResolver.resolveComponentFactory(AbcComponent);
    const component =  factory.create(this.injector);
    component.changeDetectorRef.detectChanges();
    // this.viewContainerRef.insert(component.hostView, 0);
  }

  remove() {
    this.viewContainerRef.detach();    
  }

  back() {
    console.log('cache component value', this.cacheComponent.instance.value);
    this.viewContainerRef.insert(this.cacheComponent.hostView);
  }
}
