import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, HostBinding, Input, Optional, Self, ElementRef, ChangeDetectorRef, DoCheck } from '@angular/core';
import { MatFormFieldControl, mixinErrorState, CanUpdateErrorState, ErrorStateMatcher, CanUpdateErrorStateCtor } from '@angular/material';
import { Subject } from 'rxjs';
import { NgControl, ControlValueAccessor, NgForm, FormGroupDirective } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';


type Model = string;
type PublishMethod = (model: string) => void;

export class DadaBase {
  constructor(public _defaultErrorStateMatcher: ErrorStateMatcher,
    public _parentForm: NgForm,
    public _parentFormGroup: FormGroupDirective,
    public ngControl: NgControl) { }
}
export const _DadaBaseMixinBase: CanUpdateErrorStateCtor & typeof DadaBase =
  mixinErrorState(DadaBase);

@Component({
  selector: 'app-dada',
  templateUrl: './dada.component.html',
  styleUrls: ['./dada.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: MatFormFieldControl, useExisting: DadaComponent }],
})
export class DadaComponent extends _DadaBaseMixinBase implements 
  OnInit, MatFormFieldControl<string>, OnDestroy, ControlValueAccessor, CanUpdateErrorState, DoCheck {

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private focusMonitor: FocusMonitor,
    private elementRef: ElementRef<HTMLElement>,
    private cdr: ChangeDetectorRef,
    _defaultErrorStateMatcher: ErrorStateMatcher,
    @Optional() _parentForm: NgForm,
    @Optional() _parentFormGroup: FormGroupDirective,
  ) {
    super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
    focusMonitor.monitor(elementRef.nativeElement, true).subscribe(origin => {
      this.focused = origin !== null;
      this.stateChanges.next();
    });
  }

  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
    }
  }

  private _value: string;
  @Input()
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    this._value = value;
    this.stateChanges.next();
  }

  private _placeholder: string;
  @Input()
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(placeholder) {
    this._placeholder = placeholder;
    this.stateChanges.next();
  }

  private _required = false;
  @Input()
  get required() {
    return this._required;
  }
  set required(required) {
    this._required = coerceBooleanProperty(required);
    this.stateChanges.next();
  }

  private _disabled = false;
  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(disabled) {
    this._disabled = coerceBooleanProperty(disabled);
    this.stateChanges.next();
  }

  focused = false;

  static nextId = 0;
  @HostBinding() id = `example-tel-input-${DadaComponent.nextId++}`;

  stateChanges = new Subject<void>();

  get empty() {
    return this.value === '';
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  controlType = 'example-tel-input';

  @HostBinding('attr.aria-describedby')
  describedBy = '';

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.elementRef.nativeElement.querySelector('input').focus();
    }
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.focusMonitor.stopMonitoring(this.elementRef.nativeElement);
  }

  input(value: string) {
    this.value = value;
    this.publish(this.value);
    this.touch();
  }

  private publish: PublishMethod;
  private touch: () => void;

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  async writeValue(model: Model): Promise<void> {
    this.value = model;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: PublishMethod): void {
    this.publish = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.touch = fn;
  }
}
