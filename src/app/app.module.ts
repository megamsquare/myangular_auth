import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './layout/pages/pages.component';
import { PageHeaderComponent } from './layout/pages/page-header/page-header.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { UserLayoutHeaderComponent } from './layout/user-layout/user-layout-header/user-layout-header.component';
import { UserAuthComponent } from './layout/auth/user-auth/user-auth.component';
import { AdminAuthComponent } from './layout/auth/admin-auth/admin-auth.component';
import { HttpClientModule } from '@angular/common/http';
import { PagesFooterComponent } from './layout/pages/pages-footer/pages-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PageHeaderComponent,
    UserLayoutComponent,
    UserLayoutHeaderComponent,
    UserAuthComponent,
    AdminAuthComponent,
    PagesFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
