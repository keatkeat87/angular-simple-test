import { Component, OnInit, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of, Subject, merge, Observable, from, forkJoin, Subscription, ReplaySubject } from 'rxjs';
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
      }, 3000)
    });
  }

  ngOnInit() {
    const s = new ReplaySubject<any>(1);



    s.subscribe(v => console.log(v));
    const vava = { age: 30 };
    s.next(vava);
    s.pipe(take(1)).subscribe(v => s.next(v));
    
    
  }


}
