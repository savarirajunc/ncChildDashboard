import { NgModule } from '@angular/core';


import { InvitationsComponent } from './invitations.component';
import { InvitationsRoutingModule } from './invitations-routing.module';
import { FormsModule,CommonModule,AppService,ComponentsService } from './../components.index';

import { DirectiveModule} from './../../directives/directive-module.module'

@NgModule({
  imports: [
    InvitationsRoutingModule,
    FormsModule,CommonModule,DirectiveModule
 
  ],
  declarations: [ InvitationsComponent ],
  providers:[AppService]
})
export class InvitationsModule { }