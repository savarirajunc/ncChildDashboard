import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentInfoComponent } from './payment-info.component';

import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PaymentInfoComponent,
    data: {
      title: 'Payment Info '
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentInfoRoutingModule { }
