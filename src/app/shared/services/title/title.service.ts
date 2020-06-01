import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private title = new BehaviorSubject<any>('Angular Authentication');
  private title$ = this.title.asObservable();

  constructor(
    private pageTitle: Title
  ) { }

  setTitle(title: any) {
    const page = this.title.next(title);
    this.pageTitle.setTitle(title);
  }

  getTitle(): Observable<any> {
    return this.title$;
  }
}
