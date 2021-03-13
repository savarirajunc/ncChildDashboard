import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs.component';

@NgModule({
  imports: [
    CommonModule,
    FaqsRoutingModule
  ],
  declarations: [
    FaqsComponent
  ]
})
export class FaqsModule { }
