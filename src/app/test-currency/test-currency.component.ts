import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './test-currency.component.html',
  styleUrls: ['./test-currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestCurrencyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
