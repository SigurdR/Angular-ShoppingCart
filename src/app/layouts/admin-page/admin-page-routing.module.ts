import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StaffComponent } from './staff/staff.component';

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
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: "**",
                redirectTo: '/'
            }
        ]
    }
];