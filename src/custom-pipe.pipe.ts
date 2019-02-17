import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string, args?: string[]): any {
    if(args.length === 1) {
      return value.toUpperCase();
    } else {
      return value.toLowerCase();

    }
  }

}
