import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef, ViewChildren, AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-test-simple',
  templateUrl: './test-simple.component.html',
  styleUrls: ['./test-simple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestSimpleComponent implements OnInit {

  constructor(
    private cdr: ChangeDetectorRef,
    private el: ElementRef<HTMLElement>,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
  }

 

}
