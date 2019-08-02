
import { Directive, ElementRef, Inject, Optional, Renderer2, forwardRef, Input } from '@angular/core';
import { COMPOSITION_BUFFER_MODE, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Platform } from '@angular/cdk/platform';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'input[price]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '(keydown)': 'keydown($event)',
    '(input)': 'input($event)',
    '(blur)': 'blur($event)',
    '(compositionstart)': '$any(this).compositionStart()',
    '(compositionend)': '$any(this).compositionEnd($event.target.value)'
  },
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MyInputBDirective),
    multi: true
  }]
})
export class MyInputBDirective implements ControlValueAccessor {

  constructor(
    private renderer: Renderer2, private elementRef: ElementRef,
    private platform: Platform,
    @Optional() @Inject(COMPOSITION_BUFFER_MODE) private compositionMode: boolean) {
    if (this.compositionMode == null) {
      this.compositionMode = !this.platform.ANDROID;
    }
  }

  private composing = false;

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

  keydown(event: KeyboardEvent) {
    const key = event.key;
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const input = event.target as HTMLInputElement;
    if (numbers.includes(key) || (key === '.' && !input.value.includes('.'))) {
      // ok 
    } else {
      event.preventDefault();
    }
  }

  input(event: KeyboardEvent) {
    if (!this.compositionMode || (this.compositionMode && !this.composing)) {
      const element = event.target as HTMLInputElement | HTMLTextAreaElement;
      this.onChange(element.value);
      // if (this.uppercase) {
      //   const uppercaseValue = element.value.toUpperCase();
      //   element.value = uppercaseValue;
      //   this.onChange(uppercaseValue);
      // } else {
      //   this.onChange(element.value);
      // }
    }
  }

  blur(event: KeyboardEvent) {
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
