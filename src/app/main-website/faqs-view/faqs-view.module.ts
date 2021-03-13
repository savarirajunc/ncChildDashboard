import { FaqsViewComponent } from './faqs-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqsViewRoutingModule } from './faqs-view-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FaqsViewRoutingModule
  ],
  declarations: [
    FaqsViewComponent
  ]
})
export class FaqsViewModule { }
