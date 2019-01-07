import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbcComponent implements OnInit, OnDestroy {

  constructor() { }

  value = 'default value';
  
  ngOnInit() {
    console.log('Abc init');
  }

  update() {
    this.value = 'second value';
    document.getElementById('dada').innerHTML = 'yeah done';
  }

  ngOnDestroy() {
    console.log('abc component destroy');
  }
}
