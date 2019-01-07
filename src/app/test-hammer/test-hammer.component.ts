import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test-hammer',
  templateUrl: './test-hammer.component.html',
  styleUrls: ['./test-hammer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestHammerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pan(e: any){
    console.log('pan', e);
  }

  panStart(v: string){
    console.log('panStart', v);
  }

}
