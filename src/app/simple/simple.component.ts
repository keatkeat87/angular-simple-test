import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subject, of, Observable, Subscription, merge, combineLatest, BehaviorSubject, race, fromEvent } from 'rxjs';
import { map, switchMap, tap, skip, distinctUntilChanged, share, startWith, debounceTime, takeUntil, delay, shareReplay, filter, pairwise, mapTo, auditTime, throttleTime } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

interface FormValue {
  name: string;
  email: string;
}

type FormValueChanges = { [P in keyof FormValue]: Observable<FormValue[P]> };



@Component({
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
    private httpClient: HttpClient
  ) { }

  formGroup: FormGroup;
  submitSubject = new Subject();

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: [''],
      email: ['']
    });
    const s = new Subject();
    // const o = s.pipe(auditTime(1000));
    const o = s.pipe(throttleTime(1000));
    o.subscribe(v => console.log(v));

    setTimeout(() => {
      s.next(1);
    }, 100);
    setTimeout(() => {
      s.next(200);
    }, 200);
    setTimeout(() => {
      s.next(1100);
    }, 1100);


    // const socket = new Subject<string[]>();

    // const refresh = new Subject();
    // const start = of(undefined);
    // const result = {
    //   data$: merge(start, refresh, socket.pipe(filter(keys => ['dada'].some(v => keys.includes(v)) ))).pipe(
    //     debounceTime(1),
    //     switchMap(() => {
    //       console.log('ajax start');
    //       // tslint:disable-next-line: object-literal-key-quotes
    //       return this.httpClient.get<{ value: any }>(
    //         'http://192.168.1.152:61547/api/Sales/SalesCountries',
    //         {
    //           params: {
    //             // tslint:disable-next-line: object-literal-key-quotes
    //             '$count': 'true'
    //           }
    //         }
    //       );
    //     }),
    //     shareReplay(1)
    //   ),
    //   refresh
    // };

    // refresh.next();
    // socket.next(['dada']);
    // result.data$.subscribe(v => console.log(v));

    // result.refresh.next();
    // socket.next(['dada']);








    // let step = 1;
    // const refresh = new Subject();

    // const dada = merge(of(undefined), refresh).pipe(
    //   tap(() => console.log('loading start')),
    //   switchMap(() => {
    //     console.log('ajax');
    //     if (step === 1) {
    //       step = 2;
    //       return of(['a', 'b', 'c']).pipe(delay(1000));
    //     } else {
    //       return of(['a1', 'b1', 'c1']).pipe(delay(2000));
    //     }
    //   }),
    //   tap(() => console.log('loading end')),
    //   shareReplay(1)
    // );

    // dada.subscribe(v => {
    //   console.log(v);
    // });

    // dada.subscribe(v => {
    //   console.log(v);
    // });

    // refresh.next();



  }
}
