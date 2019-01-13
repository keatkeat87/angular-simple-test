import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import produce from "immer";

class Abc {
  constructor() {
    console.log('in');
  }
  get age() {
    return 11;
  }
  value = 'dada';
}
@Component({
  selector: 'app-test-immer',
  templateUrl: './test-immer.component.html',
  styleUrls: ['./test-immer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestImmerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const a = new Abc();



    const nextState = produce(a, draftState => {
      draftState.value = 'tata';
    });
    console.log(nextState === a);
  }

}
