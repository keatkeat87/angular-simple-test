import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dada',
  templateUrl: './dada.component.html',
  styleUrls: ['./dada.component.scss']
})
export class DadaComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const a = this.activatedRoute.snapshot.paramMap.get('json');
    console.log(JSON.parse(a));
    console.log(this.activatedRoute.snapshot.paramMap.get(';age'));
    console.log(window.location.href);
    this.router.navigate([`../${this.activatedRoute.routeConfig.path}`], { relativeTo: this.activatedRoute,  replaceUrl: true });

    // console.log(encodeURI(''));
    console.log(decodeURI('http://localhost:4200/test-router-matrix/dada;json=%7B%22age%22:55,%22can%22:true%7D;age=13'));
    console.log(encodeURI(decodeURI('http://localhost:4200/test-router-matrix/dada;json=%7B%22age%22:55,%22can%22:true%7D;age=13')));

  }

}
