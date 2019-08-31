import { Component, OnInit } from '@angular/core';
import { produce, immerable } from 'immer';

class Product {
  constructor(data?: Partial<Product>) {
    Object.assign(this, data);
  }
  [immerable] = true;
  name: string;
  category: Category;
  colors: Color[];
}

class Color {
  constructor(data?: Partial<Color>) {
    Object.assign(this, data);
  }
  [immerable] = true;
  name: string;
}

class Category {
  constructor(data?: Partial<Category>) {
    Object.assign(this, data);
  }
  [immerable] = true;
  name: string;
}

@Component({
  templateUrl: './test-immer.component.html',
  styleUrls: ['./test-immer.component.scss']
})
export class TestImmerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const product = new Product({
      name: 'mk100',
      category: new Category({
         name: 'man'
      }),
      colors: [new Color({ name: 'red' }), new Color({ name: 'blue' })]
    });
    const product2 = produce(product, next => {
       next.colors[0].name = 'yellow';
    });
    console.log(product !== product2);
    console.log(product.colors !== product2.colors);
    console.log(product.colors[0] !== product2.colors[0]);
    console.log(product2);
  }

}
