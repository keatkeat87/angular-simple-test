import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';


type Constructor<T = {}> = new (...args: any[]) => T;

export interface HaveGetNameMethod {
  getName(): string
}

export type HaveGetNameCtor = Constructor<HaveGetNameMethod>;

export interface HaveGetNameMethodDependency {
  cdr: ChangeDetectorRef
}

function mixinGetName<TBase extends Constructor<HaveGetNameMethodDependency>>(Base: TBase): TBase & HaveGetNameCtor {
  return class extends Base {
    getName() {
      this.cdr.markForCheck();
      return 'dada';
    }
  
    constructor(...args: any[]) {
      super(...args);
    }
  };
}


export class BaseComponent {
  constructor(
    public cdr: ChangeDetectorRef
  ) { }
}

export const MixinComponent: HaveGetNameCtor & typeof BaseComponent = mixinGetName(BaseComponent);

export class AAA extends MixinComponent implements HaveGetNameMethod {

  constructor(
    cdr: ChangeDetectorRef
  ) {
    super(cdr);
  }
}
 

@Component({
  selector: 'app-test-mixin',
  templateUrl: './test-mixin.component.html',
  styleUrls: ['./test-mixin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestMixinComponent extends AAA implements OnInit {

  constructor(
    cdr: ChangeDetectorRef
  ) {
    super(cdr);
  }

  ngOnInit() {    
    console.log('yeah', this.getName());
  }


}
