import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './test-value-accessor.component.html',
  styleUrls: ['./test-value-accessor.component.scss'],
  // providers: [{
  //   provide : COMPOSITION_BUFFER_MODE,
  //   useValue: false
  // }]
})
export class TestValueAccessorComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  formGroup: FormGroup;

  ngOnInit() {
    console.log(window.navigator.userAgent);
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required]
    });

    this.formGroup.get('name').valueChanges.subscribe(v => console.log('valueChanges', v));
  }

  onInput() {
    console.log('onInput');
  }

}
