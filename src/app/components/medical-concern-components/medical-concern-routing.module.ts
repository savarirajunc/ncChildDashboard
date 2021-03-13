import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { MedicalConcernComponent } from './medical-concern.component';

const routes: Routes = [
  {
    path: '',
    component: MedicalConcernComponent,
    data: {
      title: 'Medical Concern'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalConcernRoutingModule {}