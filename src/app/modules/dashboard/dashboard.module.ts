import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../../material-ui.module';
import { BrowserModule } from '@angular/platform-browser';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    NavbarComponent,
    UsersComponent,
    MessagesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    RouterModule,
    NgxPaginationModule,
  ],
  exports: [AdminDashboardComponent, UsersComponent, MessagesComponent],
})
export class DashboardModule {}
