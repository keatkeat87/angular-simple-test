import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test-dynamic-component-and-template',
  templateUrl: './test-dynamic-component-and-template.component.html',
  styleUrls: ['./test-dynamic-component-and-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestDynamicComponentAndTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
