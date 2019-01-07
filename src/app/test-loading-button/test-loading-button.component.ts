import { IAsyncDone } from './interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-loading-button',
  templateUrl: './test-loading-button.component.html',
  styleUrls: ['./test-loading-button.component.scss']
})
export class TestLoadingButtonComponent implements OnInit {

  constructor() { }

  disableAll = false;

  ngOnInit() {


  }

  doActionA(event: IAsyncDone) {
    setTimeout(() => {
      event.asyncDone();
    }, 3000);
  }

  doActionB(event: IAsyncDone) {
    setTimeout(() => {
      event.asyncDone();
    }, 3000);
  }
}
