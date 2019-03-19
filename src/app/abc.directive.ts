import { Directive } from '@angular/core';

@Directive({
  selector: '[appAbc]',
  host: {
    'style': `
      position: absolute
    `
  }
})
export class AbcDirective {

  constructor() { }

}
