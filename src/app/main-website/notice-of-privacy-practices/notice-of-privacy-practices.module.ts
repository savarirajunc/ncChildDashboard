import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeOfPrivacyPracticesRoutingModule } from './notice-of-privacy-practices-routing.module';
import { NoticeOfPrivacyPracticesComponent } from './notice-of-privacy-practices.component';

@NgModule({
  imports: [
    CommonModule,
    NoticeOfPrivacyPracticesRoutingModule
  ],
  declarations: [
    NoticeOfPrivacyPracticesComponent
  ]
})
export class NoticeOfPrivacyPracticesModule { }
