import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';

class Person {
  constructor (
    public name: string
  ) {}
}

function firstLoadPeople(): Observable<Person[]> {
  return new Observable<Person[]>(observer => {
    setTimeout(() => {
      observer.next([new Person('keatkeat'), new Person('xinyao')]);
      observer.complete();
    }, 3000)
  });
}

function showAllPeople(): Observable<Person[]> {
  return new Observable<Person[]>(observer => {
    setTimeout(() => {
      observer.next([new Person('keatkeat'), new Person('xinyao'), new Person('xuehui')]);
      observer.complete();
    }, 3000)
  });
}



@Component({
  selector: 'app-test-async-pipe',
  templateUrl: './test-async-pipe.component.html',
  styleUrls: ['./test-async-pipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestAsyncPipeComponent implements OnInit {

  constructor(
    private cdr : ChangeDetectorRef
  ) { }
  
  people$: Observable<Person[]>;
  firstLoading = false;
  showAllLoading = false;

  action = new Subject<string>();
  
  reducer = this.action.subscribe(type => {
      switch(type)
      {
        case 'first load' : {
          this.firstLoading = true;
        }
        case 'show all' : {
          this.showAllLoading = true;
        } 
      }
      this.cdr.markForCheck();
  });

  effect = this.action.subscribe(type => {
    switch(type)
    {
      case 'first load' : {
        this.firstLoading = true;
      }
      case 'show all' : {
        this.showAllLoading = true;
      } 
    }
  });
  
  showAll() {

  }

  ngOnInit() {


  }
}
