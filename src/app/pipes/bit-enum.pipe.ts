import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bitEnum'
})
export class BitEnumPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    let [param] = args
    return value*param;
  }

}
