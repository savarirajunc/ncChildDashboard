import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewBagRoutingModule } from './view-bag-routing.module';
import { ViewBagComponent } from './view-bag.component';

@NgModule({
  imports: [
    CommonModule,
    ViewBagRoutingModule
  ],
  declarations: [
    ViewBagComponent
  ]
})
export class ViewBagModule { }
