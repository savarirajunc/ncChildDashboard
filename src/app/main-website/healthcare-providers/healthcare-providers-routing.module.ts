import { HealthcareProvidersComponent } from './healthcare-providers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthcareProvidersupportComponent } from './healthcare-providersupport/healthcare-providersupport.component';
import { HealthPersonalDetailsComponent } from './health-personal-details/health-personal-details.component';
import { HealthInstituteDetailsComponent } from './health-institute-details/health-institute-details.component';
import { HealthContextDetailsComponent } from './health-context-details/health-context-details.component';
import { HealthcarVideoComponent } from './healthcar-video/healthcar-video.component';

const routes: Routes = [{
  path:'',
  component:HealthcareProvidersComponent,
       children: [
        {
        path: '',
        component: HealthcareProvidersupportComponent
        },
        {
          path: 'Health_PersonalDetails',
          component: HealthPersonalDetailsComponent
        },
        {
          path: 'Health_InstituteDetails',
          component: HealthInstituteDetailsComponent
        },
        {
          path: 'Health_ContextDetails',
          component: HealthContextDetailsComponent
        },{
          path:'healthcare-video',
          component:HealthcarVideoComponent
        }
      ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthcareProvidersRoutingModule { }
