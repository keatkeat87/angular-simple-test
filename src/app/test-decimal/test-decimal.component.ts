import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './test-decimal.component.html',
  styleUrls: ['./test-decimal.component.scss']
})
export class TestDecimalComponent implements OnInit {

  constructor() { }

  formControl: FormControl;
  emailFormControl = new FormControl('', Validators.email);

  ngOnInit() {

    this.formControl = new FormControl(null, {
      validators: [Validators.required, (control: FormControl) => {
        const value = control.value as number | null;
        if (isNaN(value)) {
          return { number: true };
        }
        return null;
      }, (control: FormControl) => {
        const value = control.value as number | null;
        if (isNaN(value) || value === null) { return null; }
        const splitedValues = value.toString().split('.');
        if (splitedValues.length !== 2) { return null; }
        const decimal = splitedValues[1];
        if (decimal.length > 2) {
          return { decimal: true };
        } else {
          return null;
        }
      }]
    });
    this.formControl.getError('dada')!.

    this.formControl.valueChanges.subscribe(v => {
      // console.log(typeof v);
      // console.log(v);
    });

    this.emailFormControl.valueChanges.subscribe(v => {
      console.log(v);
    });


  }

}
