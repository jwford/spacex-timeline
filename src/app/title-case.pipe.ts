import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (!value) return value;

    const valArr = value.split(/ |_/g);

    for (let i = 0; i < valArr.length; i++) {
      valArr[i] = valArr[i][0].toUpperCase() + valArr[i].slice(1).toLowerCase();
    }

    return valArr.join(' ').replace(/_/g, ' ');
  }

}
