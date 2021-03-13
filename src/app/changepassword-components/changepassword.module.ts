import { NgModule } from '@angular/core';


import { ChangepasswordComponent } from './changepassword.component';
import { ChangepasswordRoutingModule } from './changepassword-routing.module';
import { AppService,AuthenService } from './../app.index';

import { FormsModule,CommonModule} from './../app.index';
import { DirectiveModule} from './../directives/directive-module.module';
import { ParentsService } from './../service/parents.service';


@NgModule({
  imports: [
    ChangepasswordRoutingModule,
    FormsModule,CommonModule,DirectiveModule
 
  ],
  declarations: [ ChangepasswordComponent ],
  providers:[AppService,AuthenService]
})
export class ChangepasswordModule { }