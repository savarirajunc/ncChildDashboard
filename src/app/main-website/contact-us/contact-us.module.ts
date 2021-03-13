import { ContactUsComponent } from './contact-us.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { DirectiveModule } from '../../directives/directive-module.module';


@NgModule({
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule
  ],
  declarations: [
    ContactUsComponent
  ]
})
export class ContactUsModule { }
