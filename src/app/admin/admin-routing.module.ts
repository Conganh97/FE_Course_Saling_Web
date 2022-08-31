import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AdminDashbroadComponent} from "./admin-dashbroad/admin-dashbroad.component";
import {CourseCategoryComponent} from "./course-category/course-category.component";

const routes: Routes = [
  {
    path: '',
    component: AdminDashbroadComponent,
  },
  {
    path: 'courseCategory',
    component: CourseCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
