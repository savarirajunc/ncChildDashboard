import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { BillingAddressComponent } from './billing-address.component';

const routes: Routes = [
  {
    path: '',
    component: BillingAddressComponent,
    data: {
      title: 'Billing Address'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingAddressRoutingModule {}