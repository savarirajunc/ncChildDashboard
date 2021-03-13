import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { PhysicalInfoComponent } from './physical-info.component';

const routes: Routes = [
  {
    path: '',
    component: PhysicalInfoComponent,
    data: {
      title: 'Physical Info'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhysicalInfoRoutingModule {}