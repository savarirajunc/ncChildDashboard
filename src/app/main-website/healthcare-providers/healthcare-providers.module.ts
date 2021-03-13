import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveModule } from '../../directives/directive-module.module';

import { HealthcareProvidersRoutingModule } from './healthcare-providers-routing.module';
import { HealthcareProvidersComponent } from './healthcare-providers.component';
import { HealthcareProvidersupportComponent } from './healthcare-providersupport/healthcare-providersupport.component';
import { HealthPersonalDetailsComponent } from './health-personal-details/health-personal-details.component';
import { HealthInstituteDetailsComponent } from './health-institute-details/health-institute-details.component';
import { HealthContextDetailsComponent } from './health-context-details/health-context-details.component';
import { HealthcarVideoComponent } from './healthcar-video/healthcar-video.component';

@NgModule({
  imports: [
    CommonModule,
    HealthcareProvidersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule
  ],
  declarations: [
    HealthcareProvidersComponent,
    HealthcareProvidersupportComponent,
    HealthPersonalDetailsComponent,
    HealthInstituteDetailsComponent,
    HealthContextDetailsComponent,
    HealthcarVideoComponent
  ]
})
export class HealthcareProvidersModule { }
