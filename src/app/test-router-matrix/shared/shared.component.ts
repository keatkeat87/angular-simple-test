import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params);
    // this.router.navigate(['../', {}], { replaceUrl: true, relativeTo: this.activatedRoute });
  }

}
