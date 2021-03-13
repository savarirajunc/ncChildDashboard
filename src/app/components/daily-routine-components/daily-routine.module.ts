import { NgModule } from '@angular/core';

import { TimepickerModule } from 'ngx-bootstrap';
import { DailyRoutineComponent } from './daily-routine.component';
import { DailyRoutineRoutingModule } from './daily-routine-routing.module';
import { FormsModule,CommonModule,AppService,ComponentsService } from './../components.index';

import { DirectiveModule} from './../../directives/directive-module.module'
@NgModule({
  imports: [
    TimepickerModule.forRoot(),
    DailyRoutineRoutingModule,
    FormsModule,CommonModule,DirectiveModule
  ],
  declarations: [DailyRoutineComponent ],
  providers:[AppService,ComponentsService]
})
export class DailyRoutineModule { }
