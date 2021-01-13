import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../authentication/services/token.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AdminService } from '../../authentication/services/admin.service';
import { CrudService } from '../services/crud.service';
import { Observable, interval } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  constructor(
    private _token: TokenService,
    private _router: Router,
    private _admin: AdminService,
    private _crud: CrudService
  ) {}

  adminId: string;
  adminName: string;
  adminEmail: string;
  userCount$: Observable<any>;
  userCount: string;

  ngOnInit(): void {
    this._token.verifyToken().subscribe(
      (res) => {
        this.adminId = res.admin._id;
        localStorage.setItem('adminid', this.adminId);
        this._admin.getAdminById(this.adminId).subscribe((res) => {
          this.adminName = res.admin.name;
          this.adminEmail = res.admin.email;
          // this._crud.getUserCount().subscribe((count) => {
          //   this.userCount = count.count;
          // });
          this.userCount$ = interval(1000)
            .pipe(switchMap((res) => this._crud.getUserCount()))
            .subscribe((count) => {
              this.userCount = count.count;
            });
        });
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
