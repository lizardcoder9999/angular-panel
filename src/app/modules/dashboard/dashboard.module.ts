import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AdminDashboardComponent, NavbarComponent],
  imports: [CommonModule],
  exports: [AdminDashboardComponent],
})
export class DashboardModule {}
