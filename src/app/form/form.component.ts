import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  submitting = false;

  ngOnInit() {

  }

}
