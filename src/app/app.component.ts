import { Component } from '@angular/core';
import { TitleService } from './shared/services/title/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: any;

  constructor(
    private pageTitle: TitleService
  ) {
    pageTitle.getTitle().subscribe(
      data => {
        this.title = data;
      }
    );

    pageTitle.setTitle('Just sample');
  }

  onActivate(event: any) {
    window.scroll(0, 0);
  }

}
