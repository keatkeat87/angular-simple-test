import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import { Subject, of, Observable, Subscription, merge, combineLatest } from 'rxjs';
import { map, delay, switchMap, tap, skip, distinctUntilChanged, share, startWith } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  formGroup: FormGroup;

  value = 'a';

  ngOnInit() {
 

  }

}
