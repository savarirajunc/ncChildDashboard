import { NgModule } from '@angular/core';

import { FormsModule,CommonModule,AppService,ComponentsService } from './../components.index';
import { AccountDeactiveComponent } from './account-deactive.component';
import { AccountDeactiveRoutingModule } from './account-deactive-routing.module';
import { DirectiveModule} from './../../directives/directive-module.module'

@NgModule({
  imports: [
    AccountDeactiveRoutingModule,
    FormsModule,CommonModule,DirectiveModule
  ],
  declarations: [ AccountDeactiveComponent ],
  providers:[AppService]
})
export class AccountDeactiveModule { }