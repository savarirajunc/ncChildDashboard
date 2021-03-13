import { NgModule } from '@angular/core';


import { ManageSubscribeComponent } from './manage-subscribe.component';
import { ManageSubscribeRoutingModule } from './manage-subscribe-routing.module';
import { FormsModule,CommonModule,AppService,ComponentsService } from './../components.index';

import { DirectiveModule} from './../../directives/directive-module.module'
@NgModule({
  imports: [
    ManageSubscribeRoutingModule,
    FormsModule,CommonModule,DirectiveModule
 
  ],
  declarations: [ ManageSubscribeComponent ],
  providers:[AppService]
})
export class ManageSubscribeModule { }