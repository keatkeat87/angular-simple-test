import { Component, OnInit, AfterContentInit, ContentChild, TemplateRef } from '@angular/core';
import { EfgComponent } from '../efg/efg.component';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.scss']
})
export class AbcComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  @ContentChild(EfgComponent)
  efgComponent: EfgComponent;

  ngAfterContentInit(){
    console.log('hit', this.efgComponent)
  }

}
