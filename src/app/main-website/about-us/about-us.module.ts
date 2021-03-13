import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ],
  declarations: [
    AboutUsComponent
  ]
})
export class AboutUsModule { }
