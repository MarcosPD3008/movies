import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(value: string, count:number = 97): string {
    if(value.length > count)
      return value.substring(0, count); 
    else
      return value;
  }
}
