import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRegisterRoutingModule } from './doctor-register-routing.module';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';
import { ClinicDetailsComponent } from './clinic-details/clinic-details.component';
import { DoctorRegisterComponent } from './doctor-register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap';
import { DashboardService } from '../dashboard.service';
import { SharedService } from '../shared.service';
import { AuthenService } from '../../service/authen.service';
import { WebAdminService } from '../web-admin.service';
import { DirectiveModule } from '../../directives/directive-module.module';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  imports: [
    CommonModule,
    DoctorRegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TimepickerModule.forRoot(),
    DirectiveModule
  ],
  declarations: [ViewDetailsComponent, UserDetailsComponent, HospitalDetailsComponent, ClinicDetailsComponent, DoctorRegisterComponent, EditUserComponent],
  providers:[DashboardService, SharedService, AuthenService, WebAdminService]
})
export class DoctorRegisterModule { }
