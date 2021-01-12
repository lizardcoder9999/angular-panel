import { Component, Input, OnInit } from '@angular/core';
import { LogoutService } from '../../authentication/services/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private _logout: LogoutService) {}

  @Input() adminName: string;
  @Input() adminEmail: string;

  ngOnInit(): void {}

  logoutAdmin() {
    this._logout.logOutAdmin();
  }
}
