import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


function dada() {
  return Reflect.metadata('dada', 'super');
}

class A {
  @dada()
  name: string = 'ww';
}

@Component({
  selector: 'app-test-proxy',
  templateUrl: './test-proxy.component.html',
  styleUrls: ['./test-proxy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestProxyComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const a = new A();
    const proxy = new Proxy(a, {
      // get: function (target, key, receiver) {
      //   console.log(key);
      //   console.log('receiver', receiver);
      //   return Reflect.get(target, key, receiver);
      // },
    });
    // console.log(proxy);
    // console.log(proxy == a);
    // console.log(proxy instanceof A);
    // console.log(Reflect.getMetadata('dada', proxy, 'name'));
    console.log(proxy.name);


  }

}
