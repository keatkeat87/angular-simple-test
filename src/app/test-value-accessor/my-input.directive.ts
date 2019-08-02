
import { Directive, ElementRef, Inject, Optional, Renderer2, forwardRef, Input } from '@angular/core';
import { COMPOSITION_BUFFER_MODE, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Platform } from '@angular/cdk/platform';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'input[uppercase],input[trim],textarea[uppercase],textarea[trim]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '(input)': 'input($event)',
    '(blur)': 'blur($event)',
    '(compositionstart)': '$any(this).compositionStart()',
    '(compositionend)': '$any(this).compositionEnd($event.target.value)'
  },
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MyInputDirective),
    multi: true
  }]
})
export class MyInputDirective implements ControlValueAccessor {

  constructor(
    private renderer: Renderer2, private elementRef: ElementRef,
    private platform: Platform,
    @Optional() @Inject(COMPOSITION_BUFFER_MODE) private compositionMode: boolean) {
    if (this.compositionMode == null) {
      this.compositionMode = !this.platform.ANDROID;
    }
  }

  private composing = false;

  private _uppercase: boolean;
  @Input()
  public get uppercase(): boolean {
    return this._uppercase;
  }
  public set uppercase(v: boolean) {
    this._uppercase = coerceBooleanProperty(v);
  }

  private _trim: boolean;
  @Input()
  public get trim(): boolean {
    return this._trim;
  }
  public set trim(v: boolean) {
    this._trim = coerceBooleanProperty(v);
  }

  onChange = (_: any) => { };

  onTouched = () => { };

  writeValue(value: any): void {
    const normalizedValue = value == null ? '' : value;
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }

  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
  }

  input(event: KeyboardEvent) {
    if (!this.compositionMode || (this.compositionMode && !this.composing)) {
      const element = event.target as HTMLInputElement | HTMLTextAreaElement;
      if (this.uppercase) {
        const uppercaseValue = element.value.toUpperCase();
        element.value = uppercaseValue;
        this.onChange(uppercaseValue);
      } else {
        this.onChange(element.value);
      }
    }
  }

  blur(event: KeyboardEvent) {
    if (this.trim) {
      const element = event.target as HTMLInputElement | HTMLTextAreaElement;
      const trimValue = element.value.trim();
      if (trimValue !== element.value) {
        element.value = trimValue;
        this.onChange(trimValue);
      }
    }
    this.onTouched();
  }

  compositionStart(): void { this.composing = true; }

  compositionEnd(value: any): void {
    this.composing = false;
    if (this.compositionMode) {
      this.onChange(value);
    }
  }
}
