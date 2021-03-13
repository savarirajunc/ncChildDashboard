import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducatorsRoutingModule } from './educators-routing.module';
import { EducatorsComponent } from './educators.component';

@NgModule({
  imports: [
    CommonModule,
    EducatorsRoutingModule
  ],
  declarations: [
    EducatorsComponent
  ]
})
export class EducatorsModule { }
