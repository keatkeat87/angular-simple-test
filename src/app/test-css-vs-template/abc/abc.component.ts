import { Component, OnInit, ChangeDetectionStrategy, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbcComponent implements OnInit {

  constructor() { }

  @ContentChild(TemplateRef)
  templateRef: TemplateRef<any>

  ngOnInit() {
  }

}
