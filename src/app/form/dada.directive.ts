import { Directive, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDada]'
})
export class DadaDirective implements OnInit, OnChanges {

  constructor() { }

  @Input()
  submitting: boolean;

  ngOnInit() {
    console.log('dada init', this.submitting);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('dada change', changes['submitting'].currentValue);
  }
}
