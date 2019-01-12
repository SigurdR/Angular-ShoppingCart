import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminGuard} from './shared/services/admin_guard'


const routes: Routes = [
    {
        path: 'products',
        loadChildren: './layouts/product/product.module#ProductModule'
    },
    {
        path: 'users',
        loadChildren: './layouts/user/user.module#UserModule'
    },
    {
        path: 'task-board',
        loadChildren: './layouts/task-board/task-board.module#TaskBoardModule'
    },
    {
        path: 'admin-page',
        loadChildren: './layouts/admin-page/admin-page.module#AdminPageModule',
        canActivate:[AdminGuard]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
