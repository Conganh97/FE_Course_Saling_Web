import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
  {path: "",
    component: UserDashboardComponent
  },
  {path:"edit",
  component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
