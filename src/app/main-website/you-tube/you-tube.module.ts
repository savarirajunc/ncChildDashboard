import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YouTubeRoutingModule } from './you-tube-routing.module';
import { YouTubeComponent } from './you-tube.component';

@NgModule({
  imports: [
    CommonModule,
    YouTubeRoutingModule
  ],
  declarations: [
    YouTubeComponent
  ]
})
export class YouTubeModule { }
