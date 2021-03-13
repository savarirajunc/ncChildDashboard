import { NgModule } from '@angular/core';
import { ForgotpasswordComponent } from './forgotpassword.component';
import { ForgotpasswordRoutingModule } from './forgotpassword-routing.module';
import { AuthenService } from './../service/authen.service';
import {AppService} from './../app.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule,ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DirectiveModule} from './../directives/directive-module.module'

@NgModule({
  imports: [
    ForgotpasswordRoutingModule,
    FormsModule,CommonModule,DirectiveModule

  ],
  declarations: [ ForgotpasswordComponent ],
  providers:[AppService,AuthenService]
})
export class ForgotpasswordModule { }
