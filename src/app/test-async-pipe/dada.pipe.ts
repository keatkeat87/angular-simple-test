import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dada'
})
export class DadaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    return null;
  }

}
