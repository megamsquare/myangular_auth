import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { TokenService } from '../../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate, CanActivateChild {

  constructor(
    private token: TokenService,
    private router: Router
  ) { }

  // tslint:disable-next-line: max-line-length
  canActivate(route: import('@angular/router').ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot): boolean | import('@angular/router').UrlTree | import('rxjs').Observable<boolean | import('@angular/router').UrlTree> | Promise<boolean | import('@angular/router').UrlTree> {

    if (this.token.loggedIn()) {
      return true;
    } else {
      this.token.remove();
      this.router.navigateByUrl('/');
      return false;
    }

  }
  // tslint:disable-next-line: max-line-length
  canActivateChild(childRoute: import('@angular/router').ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot): boolean | import('@angular/router').UrlTree | import('rxjs').Observable<boolean | import('@angular/router').UrlTree> | Promise<boolean | import('@angular/router').UrlTree> {
    throw new Error('Method not implemented.');
  }
}
