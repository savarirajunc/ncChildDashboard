import { NgModule } from '@angular/core';

import { AppService } from './../app.service';
import { ResetpasswordComponent } from './resetpassword.component';
import { ResetpasswordRoutingModule } from './resetpassword-routing.module';
import { DirectiveModule} from './../directives/directive-module.module'
import { AuthenService } from './../service/authen.service';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    ResetpasswordRoutingModule,
    FormsModule,CommonModule,
    DirectiveModule
  ],
  declarations: [ ResetpasswordComponent ],
  providers:[AppService,AuthenService]
})
export class ResetpasswordModule { }