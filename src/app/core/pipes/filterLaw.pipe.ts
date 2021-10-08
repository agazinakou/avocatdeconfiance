import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterLawPipe'
})
export class FilterLawPipe implements PipeTransform {

  transform(items: any[], name: string): any[] {
    if (!items) {
      return [];
    }
    if (!name) {
      return items;
    }
    name = name.toLocaleLowerCase();
    return items.filter(item => item.law[0].toLocaleLowerCase().includes(name));
  }

}
