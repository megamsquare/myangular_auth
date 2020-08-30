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
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // tslint:disable-next-line: max-line-length
        'Content-Security-Policy': 'default-src \'self\'; style-src \'self\' fonts.googleapis.com \'unsafe-inline\' maxcdn.bootstrapcdn.com \'unsafe-inline\'; font-src \'self\' fonts.gstatic.com use.fontawesome.com maxcdn.bootstrapcdn.com; script-src \'self\' code.jquery.com www.google-analytics.com ajax.googleapis.com; img-src * \'self\' data: https:; frame-ancestors \'self\'; connect-src \'self\' edubankapi.edubank.ng',
        'X-Frame-Options': 'SAMEORIGIN',
        'X-Content-Type-Options': 'nosniff',
        'Strict-Transport-Security': 'max-age=31536000',
        // tslint:disable-next-line: max-line-length
        'Feature-Policy': 'accelerometer \'none\'; gyroscope \'none\'; magnetometer \'none\'; microphone \'none\'; usb \'none\'',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache'
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
