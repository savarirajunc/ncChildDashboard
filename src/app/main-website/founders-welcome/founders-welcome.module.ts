import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoundersWelcomeRoutingModule } from './founders-welcome-routing.module';
import { FoundersWelcomeComponent } from './founders-welcome.component';

@NgModule({
  imports: [
    CommonModule,
    FoundersWelcomeRoutingModule
  ],
  declarations: [
    FoundersWelcomeComponent
  ]
})
export class FoundersWelcomeModule { }
