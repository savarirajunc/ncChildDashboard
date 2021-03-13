import { PaymentComponent } from './payment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';


@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule
  ],
  declarations: [
    PaymentComponent
  ]
})
export class PaymentModule { }
