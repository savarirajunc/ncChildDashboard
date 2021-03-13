import { ParentquestService } from './../parentquest.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentQuesHomeComponent } from './parent-ques-home/parent-ques-home.component';
import { ParentquestionarieComponent } from './parentquestionarie.component';
import { ParentquestionarieRoutingModule } from './parentquestionarie-routing.module';
import { ParentQuesChildInfoComponent } from './parent-ques-child-info/parent-ques-child-info.component';
import { ParentQuestionarieComponent } from './parent-questionarie/parent-questionarie.component';
import { ParentQuestionKidComponent } from './parent-question-kid/parent-question-kid.component';
import { CoreEducationComponent } from './parent-question-kid/core-education/core-education.component';
import { CoreInterestComponent } from './parent-question-kid/core-interest/core-interest.component';
import { CoreHealthComponent } from './parent-question-kid/core-health/core-health.component';
import {JsonpModule, Jsonp, Response} from '@angular/http'
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { DirectiveModule } from '../../directives/directive-module.module';



@NgModule({
  imports: [
    CommonModule,
    ParentquestionarieRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JsonpModule,
    HttpClientJsonpModule,
    DirectiveModule
  ],
  declarations: [
    ParentquestionarieComponent,
    ParentQuesHomeComponent,
    ParentQuesChildInfoComponent,
    ParentQuestionarieComponent,
    ParentQuestionKidComponent,
    CoreEducationComponent,
    CoreHealthComponent,
    CoreInterestComponent
  ],
  providers:[ParentquestService]
})
export class ParentquestionarieModule { }
