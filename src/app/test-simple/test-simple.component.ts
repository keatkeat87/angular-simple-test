import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { interval, Subject, merge } from 'rxjs';
import { takeUntil, switchMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-test-simple',
  templateUrl: './test-simple.component.html',
  styleUrls: ['./test-simple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestSimpleComponent implements OnInit, AfterViewInit {

  constructor(
    private cdr: ChangeDetectorRef,
    private el: ElementRef<HTMLElement>,
    private formBuilder: FormBuilder,
  ) {

  }
 
  ngOnInit() {

  

  }

  log(v: any) {
    console.log(v);
  }

  ngAfterViewInit() {
  }


}
