import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private _token: TokenService) {}

  loginAdmin(admin) {
    return this.http.post<any>('http://127.0.0.1:5000/api/admin/login', admin);
  }

  //Logged in method for the auth gaurd
  //
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  //Getting token from local storage so we can send it back to the server

  getToken() {
    return localStorage.getItem('token');
  }
}
