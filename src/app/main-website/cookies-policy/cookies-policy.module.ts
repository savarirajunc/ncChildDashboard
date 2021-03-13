import { CookiesPolicyComponent } from './cookies-policy.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookiesPolicyRoutingModule } from './cookies-policy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CookiesPolicyRoutingModule
  ],
  declarations: [
    CookiesPolicyComponent
  ]
})
export class CookiesPolicyModule { }
