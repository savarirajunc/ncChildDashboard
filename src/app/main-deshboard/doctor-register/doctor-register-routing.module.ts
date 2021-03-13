import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';
import { ClinicDetailsComponent } from './clinic-details/clinic-details.component';
import { DoctorRegisterComponent } from './doctor-register.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [{
  path: '',
  component: DoctorRegisterComponent,
  children: [
    {
      path: 'primary-hospital-details',
      component: HospitalDetailsComponent
    },
    {
      path: 'primary-clinic-details',
      component: ClinicDetailsComponent
    },
    {
      path: 'doctor-register',
      component: UserDetailsComponent
    },
    {
      path: '',
      component: ViewDetailsComponent
    },
    {
      path: 'users-edit/:id',
      component: EditUserComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRegisterRoutingModule { }
