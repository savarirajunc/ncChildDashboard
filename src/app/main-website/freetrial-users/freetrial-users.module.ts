import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FreetrialUsersRoutingModule } from './freetrial-users-routing.module';
import { FreetrialUsersComponent } from './freetrial-users.component';
import { DirectiveModule } from '../../directives/directive-module.module';

@NgModule({
  imports: [
    CommonModule,
    FreetrialUsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule
  ],
  declarations: [
    FreetrialUsersComponent
  ]
})
export class FreetrialUsersModule { }
