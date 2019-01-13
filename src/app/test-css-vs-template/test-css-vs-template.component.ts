import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './test-css-vs-template.component.html',
  styleUrls: ['./test-css-vs-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestCssVsTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('ini');
  }

}
