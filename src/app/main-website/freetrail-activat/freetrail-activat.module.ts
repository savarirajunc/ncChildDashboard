import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreetrailActivatRoutingModule } from './freetrail-activat-routing.module';
import { FreetrailActivatComponent } from './freetrail-activat.component';

@NgModule({
  imports: [
    CommonModule,
    FreetrailActivatRoutingModule
  ],
  declarations: [
    FreetrailActivatComponent
  ]
})
export class FreetrailActivatModule { }
