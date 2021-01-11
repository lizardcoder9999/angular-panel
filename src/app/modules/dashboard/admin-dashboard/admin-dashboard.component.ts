import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../authentication/services/token.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(private _token: TokenService, private _router: Router) {}

  adminId: string;

  ngOnInit(): void {
    this._token.verifyToken().subscribe(
      (res) => {
        this.adminId = res._id;
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 400) {
            this._router.navigate(['/login']);
          }
        }
      }
    );
  }
}
