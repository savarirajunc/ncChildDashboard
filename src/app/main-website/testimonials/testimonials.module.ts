import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TestimonialsComponent } from './testimonials.component';

@NgModule({
  imports: [
    CommonModule,
    TestimonialsRoutingModule
  ],
  declarations: [
    TestimonialsComponent
  ]
})
export class TestimonialsModule { }
