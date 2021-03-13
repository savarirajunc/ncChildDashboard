import { NgModule } from '@angular/core';


import { ParentsComponent } from './parents.component';
import { ParentsRoutingModule } from './parents-routing.module';
import { AppService } from './../app.service';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ParentsService } from './../service/parents.service';
import { DirectiveModule } from './../directives/directive-module.module';


@NgModule({
  imports: [
    ParentsRoutingModule,
    FormsModule,CommonModule,
    DirectiveModule
 
  ],
  declarations: [ ParentsComponent],
  providers:[AppService,ParentsService]
})
export class ParentsModule { }