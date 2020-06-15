import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../token/token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private token: TokenService
  ) { }

  userlogin(data) {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  userSignup(data) {
    return this.http.post(`${this.apiUrl}/signup`, data);
  }
}
