import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './template-for.component.html',
  styleUrls: ['./template-for.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateForComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
