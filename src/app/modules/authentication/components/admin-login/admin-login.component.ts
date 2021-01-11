import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  email: string;
  password: string;
  adminLoginData = {};

  constructor(private _auth: LoginService) {}

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
      (res) => localStorage.setItem('token', res.token),
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {}
}
