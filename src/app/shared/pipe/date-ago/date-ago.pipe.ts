import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {

  transform(value: string): string {
    const localDate = moment.utc(value).format();
    if (localDate) {
      const seconds = Math.floor((+new Date() - +new Date((localDate))) / 1000);
      if (seconds < 60) {
        return 'Just now';
      }
      const interval = {
        year: 365 * 24 * 60 * 60,
        month: (52 * 7 * 24 * 60 * 60) / 12,
        week: 7 * 24 * 60 * 60,
        day: 24 * 60 * 60,
        hour: 60 * 60,
        minute: 60,
        second: 1
      };
      let counter: any;
      for (const i of Object.keys(interval)) {
        counter = Math.floor(seconds / interval[i]);
        if (counter > 0) {
          if (counter === 1) {
            return counter + ' ' + i + ' ago'; // singular
          } else {
            return counter + ' ' + i + 's ago'; // plural
          }
        }
      }
    }
    return localDate;
  }

}
