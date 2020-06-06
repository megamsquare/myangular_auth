import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './layout/pages/pages.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent
  },
  {
    path: 'home',
    component: UserLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
