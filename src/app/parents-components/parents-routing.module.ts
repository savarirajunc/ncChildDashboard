import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { ParentsComponent } from './parents.component';

const routes: Routes = [
  {
    path: '',
    component: ParentsComponent,
    data: {
      title: 'Parents'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsRoutingModule {}