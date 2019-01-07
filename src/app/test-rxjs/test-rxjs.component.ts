import { Component, OnInit, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of, Subject, merge, Observable, from, forkJoin } from 'rxjs';
import { catchError, switchMap, tap, startWith, share, shareReplay, take, pairwise, filter, debounce, debounceTime, distinctUntilChanged, concat } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-test-rxjs',
  templateUrl: './test-rxjs.component.html',
  styleUrls: ['./test-rxjs.component.scss']
})
export class TestRxjsComponent implements OnInit {

  constructor(
  ) { }

  getPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('promise resolve');
        resolve();
      },3000)
    });
  }

  ngOnInit() {

    const s = new Subject();
    const o = s.pipe(take(1));
    const t = this.getPromise();
    forkJoin([o, t]).subscribe(([o, t]) => {
      console.log('o', o);
      console.log('t', t);
    });   
    setTimeout(() => {
      s.next('sss');
    },1500);

  }

 
}
