import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthWholeChildDevelopmentRoutingModule } from './health-whole-child-development-routing.module';
import { HealthWholeChildDevelopmentComponent } from './health-whole-child-development.component';
//import { GirlboyFooterComponent } from '../girlboy-footer/girlboy-footer.component';

@NgModule({
  imports: [
    CommonModule,
    HealthWholeChildDevelopmentRoutingModule
  ],
  declarations: [
    HealthWholeChildDevelopmentComponent,
    //GirlboyFooterComponent
  ]
})
export class HealthWholeChildDevelopmentModule { }
