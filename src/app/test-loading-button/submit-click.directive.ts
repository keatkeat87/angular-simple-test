import { IAsyncDone } from './interface';
import { Directive, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[sSubmitClick]'
})
export class SubmitClickDirective {

  constructor() { }

  @Output('sSubmitClick')
  submitClick = new EventEmitter<IAsyncDone>();

  triggerSubmit(): Promise<void> {
    // check valid
    // check pending 
    // re-run
    return new Promise((resolve) => {
      console.log('check valid');
      this.submitClick.emit({
        asyncDone: () => {
          resolve();
        }
      })
    });
  }
}
