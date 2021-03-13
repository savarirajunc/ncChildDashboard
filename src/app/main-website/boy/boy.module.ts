import { BoyComponent } from './boy.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoyRoutingModule } from './boy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BoyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BoyComponent]
})
export class BoyModule { }
