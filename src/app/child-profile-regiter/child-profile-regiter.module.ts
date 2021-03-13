import { NgModule } from '@angular/core';
import { TimepickerModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { ChildProfileRegiterComponent } from './child-profile-regiter.component';
import { ChildProfileRegiterRoutingModule } from './child-profile-regiter-routing.module';
import { FirstSlideComponent } from './first-slide/first-slide.component';
import { ChildProfilComponent } from './child-profil/child-profil.component';
import { FormsModule } from '@angular/forms';
import { ChildrenService } from '../service/children.service';
import { ComponentsService } from '../service/components.service';
import { ChildScheduledTimeComponent } from './child-scheduled-time/child-scheduled-time.component';
import { ChildSessionStartComponent } from './child-session-start/child-session-start.component';
import { FinalSlideComponent } from './final-slide/final-slide.component'
import { ParentsService} from '../service/parents.service';
import { DirectiveModule} from './../directives/directive-module.module';

@NgModule({
  imports: [
    TimepickerModule.forRoot(),
    CommonModule,
    ChildProfileRegiterRoutingModule,
    FormsModule,
    DirectiveModule
  ],
  declarations: [ChildProfileRegiterComponent, FirstSlideComponent, ChildProfilComponent, ChildScheduledTimeComponent, ChildSessionStartComponent, FinalSlideComponent],
  providers:[ChildrenService,ComponentsService,ParentsService]
})
export class ChildProfileRegiterModule { }
