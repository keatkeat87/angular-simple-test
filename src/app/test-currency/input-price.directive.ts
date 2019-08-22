
import { Directive, ElementRef, Inject, Optional, Renderer2, forwardRef, Input } from '@angular/core';
import { COMPOSITION_BUFFER_MODE, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Platform } from '@angular/cdk/platform';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Directive({
  selector: 'input[sPrice]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '(input)': 'input($event)',
    '(blur)': 'blur($event)',
    '(compositionstart)': '$any(this).compositionStart()',
    '(compositionend)': '$any(this).compositionEnd($event.target.value)'
  },
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputPriceDirective),
    multi: true
  }, CurrencyPipe, DecimalPipe]
})
export class InputPriceDirective implements ControlValueAccessor {

  constructor(
    private renderer: Renderer2, private elementRef: ElementRef,
    private platform: Platform,
    private currencyPipe: CurrencyPipe,
    private decimalPipe: DecimalPipe,
    @Optional() @Inject(COMPOSITION_BUFFER_MODE) private compositionMode: boolean) {
    if (this.compositionMode == null) {
      this.compositionMode = !this.platform.ANDROID;
    }
  }

  private composing = false;

  private _price: boolean;
  @Input('sPrice')
  public get price(): boolean {
    return this._price;
  }
  public set price(v: boolean) {
    this._price = coerceBooleanProperty(v);
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
      console.log('in');
      const element = event.target as HTMLInputElement | HTMLTextAreaElement;
      const result = this.decimalPipe.transform(+element.value, '0.2-4');
      element.value = result;
      this.onChange(result);
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
