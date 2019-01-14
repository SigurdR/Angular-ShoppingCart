import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StaffComponent } from './staff/staff.component';
import { StaffListComponent } from './staff-list/staff-list.component'

export const AdminRoutes: Routes = [
    {   
        path: 'admin-page',
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
                path: 'staff/:id',
                component: StaffListComponent
            },
            {
                path: "**",
                redirectTo: '/'
            }
        ]
    }
];
