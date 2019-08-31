import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  templateUrl: './test-chip-click.component.html',
  styleUrls: ['./test-chip-click.component.scss']
})
export class TestChipClickComponent implements OnInit {

  constructor() { }

  formControl = new FormControl('One fish');

  ngOnInit() {
    this.formControl.valueChanges.subscribe(v => console.log(v));
  }

}
