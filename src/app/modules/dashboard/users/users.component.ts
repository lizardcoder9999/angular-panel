import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../authentication/services/token.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AdminService } from '../../authentication/services/admin.service';
import { CrudService } from '../services/crud.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(
    private _token: TokenService,
    private _router: Router,
    private _admin: AdminService,
    private _crud: CrudService
  ) {}

  adminId: string;
  adminName: string;
  adminEmail: string;
  users: any[];
  deletedId: string;
  successMessage: string;

  ngOnInit(): void {
    this._token.verifyToken().subscribe(
      (res) => {
        this.adminId = res.admin._id;
        localStorage.setItem('adminid', this.adminId);
        this._admin.getAdminById(this.adminId).subscribe((res) => {
          this.adminName = res.admin.name;
          this.adminEmail = res.admin.email;
          this._crud.readAllUsers().subscribe((res) => {
            this.users = res.users;
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

  deleteUserById(id: string) {
    this._crud.deleteUser(id).subscribe(() => {
      this._crud.readAllUsers().subscribe((res) => {
        this.users = res.users;
        this.successMessage = 'User succesfully deleted';
      });
    });
  }

  removePopup() {
    this.successMessage = '';
  }
}
