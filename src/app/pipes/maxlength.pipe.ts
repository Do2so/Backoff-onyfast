import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxlength'
})
export class MaxlengthPipe implements PipeTransform {

  transform(value: string, maxLength: number): string {
    if (!value) {
      return '';
    }

    if (value.length <= maxLength) {
      return value;
    } else {
      return value.slice(0, maxLength) + '...';
    }
  }

}
