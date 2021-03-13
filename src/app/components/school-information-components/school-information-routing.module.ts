import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { SchoolInformationComponent } from './school-information.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolInformationComponent,
    data: {
      title: 'School Information'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolInformationRoutingModule {}