import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { StaffComponent } from './staff/staff.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module'

@NgModule({
  declarations: [
    AdminPageComponent,
    AppNavbarComponent,
    DashboardComponent,
    ConfirmationDialogComponent,
    StaffComponent,
    StaffListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminPageModule { }
