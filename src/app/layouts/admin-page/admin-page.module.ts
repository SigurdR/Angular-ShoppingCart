import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "src/app/shared/shared.module";
import { AdminPageComponent } from './admin-page.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { StaffComponent } from './staff/staff.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin-page-routing.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(AdminRoutes)
  ],
  declarations: [
    AdminPageComponent,
    AppNavbarComponent,
    DashboardComponent,
    ConfirmationDialogComponent,
    StaffComponent,
    StaffListComponent
  ]
  
})
export class AdminPageModule { }
