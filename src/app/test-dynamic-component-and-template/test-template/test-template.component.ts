import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-test-template',
  templateUrl: './test-template.component.html',
  styleUrls: ['./test-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestTemplateComponent implements OnInit {

  constructor() { }

  @ViewChild('template')
  templateRef: TemplateRef<{ value: string, $implicit: string }>

  @ViewChild('container1', { read: ViewContainerRef })
  container1Ref: ViewContainerRef;

  @ViewChild('container2', { read: ViewContainerRef })
  container2Ref: ViewContainerRef;

  ngOnInit() {


  }

  append1() {
    const viewRef = this.templateRef.createEmbeddedView({ value : 'value1', $implicit : 'implicit1' });    
    this.container1Ref.insert(viewRef);
  }

  
  append2() {
    const viewRef = this.templateRef.createEmbeddedView({ value : 'value2', $implicit : 'implicit2' });    
    this.container2Ref.insert(viewRef);
  }


  remove(){
      this.container1Ref.remove(0);      
  }

}
