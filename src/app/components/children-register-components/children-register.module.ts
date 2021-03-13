import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,AppService,ComponentsService } from './../components.index';
import { ChildrenRegisterComponent } from './children-register.component';
import { DirectiveModule} from './../../directives/directive-module.module'
import { ChildrenRegisterRoutingModule} from './children-register-routing.module';

@NgModule({
  imports: [
    ChildrenRegisterRoutingModule,CommonModule,FormsModule,DirectiveModule
  ],
  declarations: [ChildrenRegisterComponent],
  providers:[AppService,ComponentsService]
})
export class ChildrenRegisterModule { }


