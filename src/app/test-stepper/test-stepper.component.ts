import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-stepper',
  templateUrl: './test-stepper.component.html',
  styleUrls: ['./test-stepper.component.scss']
})
export class TestStepperComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  formGroup: FormGroup;

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      info: this.formBuilder.group({
        name: ['', Validators.required]
      }),
      address: this.formBuilder.group({
        address1: ['', Validators.required]
      })
    });
  }

}
