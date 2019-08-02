import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import { Subject, of, Observable, Subscription, merge } from 'rxjs';
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
  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      name: ['']
    });

    this.formGroup.get('name').valueChanges.subscribe(v => console.log(v));

    // document.getElementById('dada').addEventListener('keydown', (e: KeyboardEvent) => {
    //   // console.log(e.target);

    //   const input = e.target as HTMLInputElement;
    //   console.log('input', input);
    //   console.log('input', input.value);

    //   console.log(e.key);
    //   input.value = (input.value + e.key).toUpperCase();
    //   // console.log('value', value);
    //   // const input = e.target as HTMLInputElement;
    //   // input.value = value.toUpperCase();
    //   // console.log('keydown', input.value);
    // });

    // document.getElementById('dada').addEventListener('keyup', () => {
    //   console.log('keyup');
    // });

    // document.getElementById('dada').addEventListener('keypress', (e: KeyboardEvent) => {
    //   const input = e.target as HTMLInputElement;
    //   console.log('keypress', input.value);
    //   e.preventDefault();
    // });

    // document.getElementById('dada').addEventListener('blur', () => {
    //   console.log('blur');
    // });

    document.getElementById('dada').addEventListener('input', (e: KeyboardEvent) => {
      const input = e.target as HTMLInputElement;
      // input.value = input.value.toUpperCase();
      console.log(input.value);
    });
  }

}
