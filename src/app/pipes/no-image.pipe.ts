import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(image: string): string {
    if(image.substring(image.length-4, image.length) == "null" )
      return './assets/img/placeholder.png'
    else
      return image
  }

}
