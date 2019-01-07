import { IAsyncDone } from './../interface';
import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef, Input, Optional, Inject } from '@angular/core';
import { SubmitClickDirective } from '../submit-click.directive';

@Component({
  selector: 'app-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss']
})
export class LoadingButtonComponent implements OnInit {

  constructor(
    private cdr: ChangeDetectorRef,
    @Optional() @Inject(SubmitClickDirective) private submitClickDirective: SubmitClickDirective | null
  ) { 
    console.log(this.submitClickDirective);
  }

  @Output()
  loadingButtonClick = new EventEmitter<IAsyncDone>();

  loading = false;

  @Input()
  disabled = false;
  @Output()
  disabledChange = new EventEmitter<boolean>();

  ngOnInit() {
  }

  click() {
    if (!this.loading && !this.disabled) {
      this.loading = true;
      this.disabledChange.emit(true);
      this.disabled = true;
      const asyncDone = () => {
        this.loading = false;
        this.disabled = false;
        this.disabledChange.emit(false);
        this.cdr.markForCheck();
      }
      if(this.submitClickDirective) {
        this.submitClickDirective.triggerSubmit().then(asyncDone);
      } else {
        this.loadingButtonClick.emit({ asyncDone });
      }    
    }
  }
}
