import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: any): any[] {

    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    return items.filter((item: any) => {
      return Object.keys(item).some((key: any) => {
        return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
      });
    });
  }

}
