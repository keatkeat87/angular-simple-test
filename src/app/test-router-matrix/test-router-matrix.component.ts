import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './test-router-matrix.component.html',
  styleUrls: ['./test-router-matrix.component.scss']
})
export class TestRouterMatrixComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  json = JSON.stringify({ age: 55, can: true });

  ngOnInit() {
    // this.router.navigate(['../']);
    // this.router.navigate(['../', {}], { replaceUrl: true, relativeTo: this.activatedRoute });
  }

}
