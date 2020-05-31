import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    url: environment.url
  };

  constructor() { }

  set(token: any) {
    localStorage.setItem('token', token.access_token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  handle(token: any) {
    this.set(token);
  }

  decode(payload: any) {
    return JSON.parse(atob(payload));
  }

  payload(token: any) {
    if (token) {
      const payload = token.split('.')[1];
      return this.decode(payload);
    }
  }

  isTokenValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  loggedIn() {
    return this.isTokenValid();
  }
}
