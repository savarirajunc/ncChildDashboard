import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalizedLearningRoutingModule } from './personalized-learning-routing.module';
import { PersonalizedLearningComponent } from './personalized-learning.component';
//import { GirlboyFooterComponent } from '../girlboy-footer/girlboy-footer.component';

@NgModule({
  imports: [
    CommonModule,
    PersonalizedLearningRoutingModule
  ],
  declarations: [
    PersonalizedLearningComponent,
    //GirlboyFooterComponent
  ]
})
export class PersonalizedLearningModule { }
