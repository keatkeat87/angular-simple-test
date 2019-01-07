import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormControlName, Validators } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-test-form-field',
  templateUrl: './test-form-field.component.html',
  styleUrls: ['./test-form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestFormFieldComponent implements OnInit {

  constructor(
  ) { }

  formControl = new FormControl('abc');
 
  ngOnInit() {

  }
 
}
