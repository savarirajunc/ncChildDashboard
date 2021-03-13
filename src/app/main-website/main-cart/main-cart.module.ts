import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainCartRoutingModule } from './main-cart-routing.module';
import { MainCartComponent } from './main-cart.component';

@NgModule({
  imports: [
    CommonModule,
    MainCartRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainCartComponent
  ]
})
export class MainCartModule { }
