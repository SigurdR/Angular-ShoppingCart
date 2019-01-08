import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPageComponent } from './admin-page.component';
import { StaffComponent } from './staff/staff.component';
import { StaffListComponent } from './staff-list/staff-list.component';

const routes: Routes = [
    {   
        path: '', 
        component: AdminPageComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'staff',
                component: StaffComponent
            },
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: "**",
                redirectTo: 'dashboard'
            }
        ]
    }
]

export const AdminRoutingModule = RouterModule.forChild(routes); /* for lazy loading */