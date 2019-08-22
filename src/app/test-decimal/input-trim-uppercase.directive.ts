
import { Directive, ElementRef, Renderer2, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector:
    // tslint:disable-next-line: directive-selector
    'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '(change)': 'onChange($event)',
    '(input)': 'onChange($event)',
    '(blur)': 'blur($event)'
  },
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MyNumberValueAccessor),
    multi: true
  }]
})
export class MyNumberValueAccessor implements ControlValueAccessor {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }
  onTouched: any;
  onChange = (_: any) => { };
  blur = (e: Event) => {
    const input = e.target as HTMLInputElement;
    const value = input.value;
    console.log('value', value);
    if (value !== '') {
      if (value.startsWith('.')) {
        input.value = '0' + value;
      } else if (value.endsWith('.')) {
        console.log(value.substring(0, value.length - 1));
        input.value = value.substring(0, value.length - 1);
      }
    }
    this.onTouched();
  }
  writeValue(value: number): void {
    const normalizedValue = value === null ? '' : value;
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
  }
  registerOnChange(fn: (_: number | null) => void): void {
    this.onChange = (e: Event) => {
      const input = e.target as HTMLInputElement;
      let value: number | null;
      if (input.validity.badInput) {
        value = NaN;
      } else if (input.value === '') {
        value = null;
      } else {
        value = parseFloat(input.value);
      }
      console.log(value);
      fn(value);
    };
  }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
  }
}
