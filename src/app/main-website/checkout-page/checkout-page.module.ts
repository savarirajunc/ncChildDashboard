import { CheckoutPageComponent } from './checkout-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CheckoutPageRoutingModule } from './checkout-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CheckoutPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CheckoutPageComponent]
})
export class CheckoutPageModule { }
