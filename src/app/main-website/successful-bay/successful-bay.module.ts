import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SuccessfulBayRoutingModule } from './successful-bay-routing.module';
import { SuccessfulBayComponent } from './successful-bay.component';

@NgModule({
  imports: [
    CommonModule,
    SuccessfulBayRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SuccessfulBayComponent
  ]
})
export class SuccessfulBayModule { }
