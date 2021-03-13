import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterestExplorationRoutingModule } from './interest-exploration-routing.module';
import { InterestExplorationComponent } from './interest-exploration.component';

@NgModule({
  imports: [
    CommonModule,
    InterestExplorationRoutingModule
  ],
  declarations: [
    InterestExplorationComponent
  ]
})
export class InterestExplorationModule { }
