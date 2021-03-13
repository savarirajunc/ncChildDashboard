import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailySessionComponent } from './daily-session.component';
import { DailySessionRoutingModule } from './daily-session-routing.module';
import { TimepickerModule } from 'ngx-bootstrap';

import { FormsModule,ReactiveFormsModule }   from '@angular/forms'; 
import {AppService } from './../../app.service';
import { ComponentsService } from './../../service/components.service';
import { DirectiveModule} from './../../directives/directive-module.module'
@NgModule({
  imports: [
    TimepickerModule.forRoot(),CommonModule,DailySessionRoutingModule,FormsModule,DirectiveModule
  ],
  declarations: [DailySessionComponent],
  providers:[AppService,ComponentsService]
})
export class DailySessionModule { }
