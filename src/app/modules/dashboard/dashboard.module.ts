import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../../material-ui.module';
import { BrowserModule } from '@angular/platform-browser';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminDashboardComponent, NavbarComponent, UsersComponent],
  imports: [CommonModule, MaterialModule, BrowserModule, RouterModule],
  exports: [AdminDashboardComponent, UsersComponent],
})
export class DashboardModule {}
