import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private title = new BehaviorSubject<any>('Angular Authentication');
  private title$ = this.title.asObservable();

  constructor() { }

  setTitle(title: any) {
    this.title.next(title);
  }

  getTitle(): Observable<any> {
    return this.title$;
  }
}
