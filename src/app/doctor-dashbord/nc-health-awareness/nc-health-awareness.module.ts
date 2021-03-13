import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NcHealthAwarenessRoutingModule } from './nc-health-awareness-routing.module';
import { NcHealthAwarenessComponent } from './nc-health-awareness.component';

@NgModule({
  imports: [
    CommonModule,
    NcHealthAwarenessRoutingModule
  ],
  declarations: [NcHealthAwarenessComponent]
})
export class NcHealthAwarenessModule { }
