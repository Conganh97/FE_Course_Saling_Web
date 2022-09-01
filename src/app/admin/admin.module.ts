import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashbroadComponent } from './admin-dashbroad/admin-dashbroad.component';
import { CourseCategoryComponent } from './course-category/course-category.component';

import { NavbarleftComponent } from './navbarleft/navbarleft.component';
import { NavbartopComponent } from './navbartop/navbartop.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';


@NgModule({
    declarations: [
        AdminDashbroadComponent,
        CourseCategoryComponent,

        NavbarleftComponent,
        NavbartopComponent,
        CourseDetailComponent
    ],
  exports: [
    NavbartopComponent,
    NavbarleftComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule
    ]
})
export class AdminModule { }
