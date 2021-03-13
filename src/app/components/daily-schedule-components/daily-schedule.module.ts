import { NgModule } from '@angular/core';

import { TimepickerModule } from 'ngx-bootstrap';
import { DailyScheduleComponent } from './daily-schedule.component';
import { DailyScheduleRoutingModule } from './daily-schedule-routing.module';
import { FormsModule } from '@angular/forms';
import {AppService } from './../../app.service';
import { ComponentsService } from './../../service/components.service';
import { CommonModule } from './../components.index';
import { DirectiveModule} from './../../directives/directive-module.module'

@NgModule({
  imports: [
    TimepickerModule.forRoot(),
    DailyScheduleRoutingModule,
    FormsModule,CommonModule,DirectiveModule
  ],
  declarations: [ DailyScheduleComponent ],
  providers:[AppService,ComponentsService]
})
export class DailyScheduleModule { }
