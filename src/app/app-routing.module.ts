import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './layout/pages/pages.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { UserAuthComponent } from './layout/auth/user-auth/user-auth.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./components/pages/services/services.module').then(m => m.ServicesModule)
      },
      {
        path: 'team',
        loadChildren: () => import('./components/pages/team/team.module').then(m => m.TeamModule)
      }
    ]
  },
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./components/user/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)
      }
    ]
  },
  {
    path: '',
    component: UserAuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./components/auth/user-auth/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('./components/auth/user-auth/sign-up/sign-up.module').then(m => m.SignUpModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
