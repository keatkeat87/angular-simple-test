import { Directive, HostListener } from '@angular/core';
import { MatChip } from '@angular/material/chips';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[sMatChipClick]'
})
export class SMatChipClickDirective {

  constructor(
    private matChip: MatChip
  ) { }

  @HostListener('click')
  click() {
    this.matChip.toggleSelected(true);
  }
}
