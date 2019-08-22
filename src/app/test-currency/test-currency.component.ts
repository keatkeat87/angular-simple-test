import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import * as f from 'big.js';
import { Big, RoundingMode } from 'big.js';
import { FormControl } from '@angular/forms';

@Component({
  templateUrl: './test-currency.component.html',
  styleUrls: ['./test-currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestCurrencyComponent implements OnInit {

  constructor() { }

  formControl = new FormControl('');

  ngOnInit() {
    const a = new Big(1.34).round(1, RoundingMode.RoundHalfEven);  // 1.3
    const ba = new Big(1.35).round(1, RoundingMode.RoundHalfEven);  // 1.4
    const ab = new Big(-1.34).round(1, RoundingMode.RoundHalfEven);  // -1.3
    const ac = new Big(-1.35).round(1, RoundingMode.RoundHalfEven);  // -1.4
    console.log(a.toPrecision());
    console.log(ba.toPrecision());
    console.log(ab.toPrecision());
    console.log(ac.toPrecision());

  }
}
