import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskRoutes } from './task-board-routing.module';
import { TaskBoardComponent } from "./task-board.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule, SharedModule, TaskRoutes],
  declarations: [TaskBoardComponent]
})
export class TaskBoardModule { }
