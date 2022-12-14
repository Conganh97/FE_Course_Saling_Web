import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashbroadComponent } from './admin-dashbroad/admin-dashbroad.component';
import { CourseCategoryComponent } from './course-category/course-category.component';

import { NavbarleftComponent } from './navbarleft/navbarleft.component';
import { NavbartopComponent } from './navbartop/navbartop.component';
import {HttpClientModule} from "@angular/common/http";
import { CoursedetailComponent } from './coursedetail/coursedetail.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../environments/environment";
import { AdminInstructorComponent } from './admin-instructor/admin-instructor.component';
import { AdminCourseEditComponent } from './admin-course-edit/admin-course-edit.component';
import { CreateLessonComponent } from './create-lesson/create-lesson.component';
@NgModule({
  declarations: [
    AdminDashbroadComponent,
    CourseCategoryComponent,
    NavbarleftComponent,
    NavbartopComponent,
    CoursedetailComponent,
    CreateCourseComponent,
    AdminInstructorComponent,
    AdminCourseEditComponent,
    CreateLessonComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ]
})
export class AdminModule { }
