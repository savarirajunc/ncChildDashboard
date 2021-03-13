import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesViewRoutingModule } from './stories-view-routing.module';
import { StoriesViewComponent } from './stories-view.component';

@NgModule({
  imports: [
    CommonModule,
    StoriesViewRoutingModule
  ],
  declarations: [
    StoriesViewComponent
  ]
})
export class StoriesViewModule { }
