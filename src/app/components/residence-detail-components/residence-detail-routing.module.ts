import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { ResidenceDetailComponent } from './residence-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ResidenceDetailComponent,
    data: {
      title: 'Residence Detail'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidenceDetailRoutingModule {}