import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GirlComponent } from './girl.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GirlRoutingModule } from './girl-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GirlRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [GirlComponent]
})
export class GirlModule { }
