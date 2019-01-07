import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ResolveStart, ResolveEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.router.events.pipe(filter(e => e instanceof ResolveStart || e instanceof ResolveEnd)).subscribe(e => {
      // console.log(e);
    });
  }
}
