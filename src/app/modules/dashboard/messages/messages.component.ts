import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../authentication/services/admin.service';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';
import { TokenService } from '../../authentication/services/token.service';
import { HttpErrorResponse } from '@angular/common/http';
import { interval, Observable } from 'rxjs';
import { MessageService } from '../services/message.service';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { RespondPopupComponent } from '../respond-popup/respond-popup.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  constructor(
    private _token: TokenService,
    private _router: Router,
    private _admin: AdminService,
    private _crud: CrudService,
    private _message: MessageService,
    private serviceDialog: MatDialog
  ) {}

  adminName: string;
  adminEmail: string;
  loading: string;
  adminId: string;
  messages: [];
  messages$: Observable<any>;
  p: number = 1;

  ngOnInit(): void {
    this.loading = 'true';
    this._token.verifyToken().subscribe(
      (res) => {
        this.adminId = res.admin._id;
        localStorage.setItem('adminid', this.adminId);
        this._admin.getAdminById(this.adminId).subscribe((res) => {
          this.adminName = res.admin.name;
          this.adminEmail = res.admin.email;
          this.messages$ = interval(1000)
            .pipe(switchMap((message) => this._message.getAllMessages()))
            .subscribe((messages) => {
              this.messages = messages.messages;
            });
          setTimeout(() => {
            this.loading = '';
          }, 950);
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

  respond() {
    this.serviceDialog.open(RespondPopupComponent, {
      width: '650px',
    });
  }
}
