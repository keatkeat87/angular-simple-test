import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

class Person {
  name: string
}

@Component({
  selector: 'app-test-checkbox-list-select',
  templateUrl: './test-checkbox-list-select.component.html',
  styleUrls: ['./test-checkbox-list-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestCheckboxListSelectComponent implements OnInit {

  constructor() { }
  list : Person[] = [];
  ngOnInit() {
    const selection = new SelectionModel<Person>(true, this.list);

  }

}
