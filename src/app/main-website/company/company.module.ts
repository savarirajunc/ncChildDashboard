import { CompanyComponent } from './company.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CompanyRoutingModule } from './company-routing.module';
import { DirectiveModule } from '../../directives/directive-module.module';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule
  ],
  declarations: [
    CompanyComponent
  ]
})
export class CompanyModule { }
