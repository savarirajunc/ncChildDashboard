
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ActivateNidaraComponent} from './activate-nidara.component'

const routes: Routes = [
  {
    path: '',
    component: ActivateNidaraComponent,
    data: {
      title: 'Activate Nidara'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivateNidaraRoutingModule { }

