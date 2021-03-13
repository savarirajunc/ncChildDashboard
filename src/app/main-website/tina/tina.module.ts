import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TinaRoutingModule } from './tina-routing.module';
import { TinaComponent } from './tina.component';

@NgModule({
  imports: [
    CommonModule,
    TinaRoutingModule
  ],
  declarations: [
    TinaComponent
  ]
})
export class TinaModule { }
