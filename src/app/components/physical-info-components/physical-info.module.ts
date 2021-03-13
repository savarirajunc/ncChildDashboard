import { NgModule } from '@angular/core';


import { PhysicalInfoComponent } from './physical-info.component';
import { PhysicalInfoRoutingModule } from './physical-info-routing.module';

import { FormsModule,CommonModule,AppService,ComponentsService } from './../components.index';
import { DirectiveModule} from './../../directives/directive-module.module'

@NgModule({
  imports: [
    PhysicalInfoRoutingModule,
  FormsModule,   
    CommonModule,DirectiveModule
  ],
  declarations: [ PhysicalInfoComponent ],
  providers:[AppService,ComponentsService]
})
export class PhysicalInfoModule { }