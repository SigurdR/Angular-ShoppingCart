import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { TaskBoardComponent } from "./task-board.component";

const routes: Routes = [
    {
        path: 'tasks',
        children: [
            {
				path: '',
				component: TaskBoardComponent
			},
        ]
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
export const TaskRoutes = RouterModule.forChild(routes)
