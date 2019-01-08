import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NoAccessComponent } from './shared/components/no-access/no-access.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AdminGuard } from './shared/services/admin_guard';
import { AuthGuard } from './shared/services/auth_guard';

export const AppRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				loadChildren: './index/index.module#IndexModule'
			},
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
		]
	},
	{ path: 'no-access', component: NoAccessComponent },
	{ path: '**', component: PageNotFoundComponent }
];
