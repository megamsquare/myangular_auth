import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './layout/pages/pages.component';
import { PageHeaderComponent } from './layout/pages/page-header/page-header.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { UserLayoutHeaderComponent } from './layout/user-layout/user-layout-header/user-layout-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PageHeaderComponent,
    UserLayoutComponent,
    UserLayoutHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
