import { EditorialPolicyComponent } from './editorial-policy.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorialPolicyRoutingModule } from './editorial-policy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EditorialPolicyRoutingModule
  ],
  declarations: [
    EditorialPolicyComponent
  ]
})
export class EditorialPolicyModule { }
