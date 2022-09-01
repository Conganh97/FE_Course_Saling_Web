import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NavbartopComponent } from './navbartop/navbartop.component';
import { HeaderComponent } from './header/header.component';
import { NavbarleftComponent } from './navbarleft/navbarleft.component';
import { FooterComponent } from './footer/footer.component';
import { EditComponent } from './edit/edit.component';
import { DeleteAccComponent } from './delete-acc/delete-acc.component';


@NgModule({
  declarations: [

    UserDashboardComponent,
    NavbartopComponent,
    HeaderComponent,
    NavbarleftComponent,
    FooterComponent,
    EditComponent,
    DeleteAccComponent
  ],
  exports: [
    NavbartopComponent,
    NavbarleftComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
