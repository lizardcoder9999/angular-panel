import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  email: string;
  password: string;
  adminLoginData = {};

  constructor(private _auth: LoginService, private _router: Router) {}

  onEmailChange(value: string) {
    this.email = value;
  }

  onPasswordChange(value: string) {
    this.password = value;
  }

  loginAdministrator() {
    this.adminLoginData = {
      email: this.email,
      password: this.password,
    };
    this._auth.loginAdmin(this.adminLoginData).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/']);
      },
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {}
}
