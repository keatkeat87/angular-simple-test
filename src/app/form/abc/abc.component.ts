import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbcComponent implements OnInit, OnChanges {

  constructor() { }

  private _submitting: boolean;
  @Input()
  get submitting(): boolean {
    return this._submitting;
  }
  set submitting(value: boolean) {
    console.log('update');
    this._submitting = value;
    this.submittingChange.emit(value);
  }

  @Output()
  submittingChange = new EventEmitter<boolean>();

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('done', changes['submitting'].currentValue);
  }

}
