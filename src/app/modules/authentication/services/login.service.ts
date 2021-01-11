import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginAdmin(admin) {
    return this.http.post<any>('http://127.0.0.1:5000/api/admin/login', admin);
  }

  //Logged in method for the auth gaurd

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
