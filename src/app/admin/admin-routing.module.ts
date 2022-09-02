import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AdminDashbroadComponent} from "./admin-dashbroad/admin-dashbroad.component";
import {CourseCategoryComponent} from "./course-category/course-category.component";
import {CoursedetailComponent} from "./coursedetail/coursedetail.component";
import {CreateCourseComponent} from "./create-course/create-course.component";
import {AdminCourseEditComponent} from "./admin-course-edit/admin-course-edit.component";
import {CreateLessonComponent} from "./create-lesson/create-lesson.component";

const routes: Routes = [
  {
    path: '',
    component: AdminDashbroadComponent,
  },
  {
    path: 'courseCategory',
    component: CourseCategoryComponent,
  },{
    path: 'courseDetail/:idCourse',
    component: CoursedetailComponent,
  },{
  path:'createCourse',
    component:CreateCourseComponent
  },{
    path:'editCourse/:idCourse',
    component:AdminCourseEditComponent
  },{
    path:'createLesson/:idCourse',
    component:CreateLessonComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
