import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  constructor(private _router: Router) {}

  logOutAdmin() {
    localStorage.removeItem('token');
    localStorage.removeItem('adminid');
    this._router.navigate(['/login']);
  }
}
