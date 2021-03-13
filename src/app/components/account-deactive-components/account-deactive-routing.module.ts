import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AccountDeactiveComponent } from './account-deactive.component';

const routes: Routes = [
  {
    path: '',
    component: AccountDeactiveComponent,
    data: {
      title: 'Account Deactive'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountDeactiveRoutingModule {}