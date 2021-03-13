import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { ManageSubscribeComponent } from './manage-subscribe.component';

const routes: Routes = [
  {
    path: '',
    component: ManageSubscribeComponent,
    data: {
      title: 'Manage Subscriber'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageSubscribeRoutingModule {}