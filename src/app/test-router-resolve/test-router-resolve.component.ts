import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test-router-resolve',
  templateUrl: './test-router-resolve.component.html',
  styleUrls: ['./test-router-resolve.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestRouterResolveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
