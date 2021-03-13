import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { CaregiverGuideComponent } from './caregiver-guide.component';

const routes: Routes = [
  {
    path: '',
    component: CaregiverGuideComponent,
    data: {
      title: 'Caregiver Guide'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaregiverGuideRoutingModule {}