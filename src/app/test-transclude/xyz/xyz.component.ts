import { Component, OnInit, AfterContentInit, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { EfgComponent } from '../efg/efg.component';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent implements OnInit, AfterContentInit {

  constructor() { }

  @ContentChild(EfgComponent)
  efgComponent: EfgComponent;

  ngAfterContentInit() {
    console.log('hit2', this.efgComponent);
  }

  ngOnInit() {
  }

}
