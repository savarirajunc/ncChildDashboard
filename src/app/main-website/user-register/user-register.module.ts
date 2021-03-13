import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegisterRoutingModule } from './user-register-routing.module';
import { UserRegisterComponent } from './user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveModule } from '../../directives/directive-module.module';

@NgModule({
  imports: [
    CommonModule,
    UserRegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule
  ],
  declarations: [
    UserRegisterComponent
  ]
})
export class UserRegisterModule { }
