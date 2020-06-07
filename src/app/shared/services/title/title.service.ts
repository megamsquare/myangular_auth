import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private title = new BehaviorSubject<any>('');
  private title$ = this.title.asObservable();

  constructor(
    private pageTitle: Title
  ) { }

  setTitle(title: any) {
    this.title.next(title);
    if (!title) {
      this.pageTitle.setTitle('Angular Authenication');
    } else {
      this.pageTitle.setTitle(title);
    }
  }

  getTitle(): Observable<any> {
    return this.title$;
  }
}
