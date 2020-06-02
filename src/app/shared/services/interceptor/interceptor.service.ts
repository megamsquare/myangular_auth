import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { TokenService } from '../token/token.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  intercept(
    req: import('@angular/common/http').HttpRequest<any>,
    next: import('@angular/common/http').HttpHandler): import('rxjs').Observable<import('@angular/common/http').HttpEvent<any>> {
    if (this.token.get()) {
      req = this.addToken(req, this.token.get());
    }
    return next.handle(req).pipe(
      catchError(this.handleError)
    );
  }

  constructor(private token: TokenService) { }

  private addToken(req: HttpRequest<any>, token: string) {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      console.error(401);
    }
    return throwError(error);
  }
}
