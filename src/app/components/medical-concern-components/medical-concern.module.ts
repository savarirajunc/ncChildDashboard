import { NgModule } from '@angular/core';


import { MedicalConcernComponent } from './medical-concern.component';
import { MedicalConcernRoutingModule } from './medical-concern-routing.module';
import { FormsModule,CommonModule,AppService,ComponentsService } from './../components.index';
import { DirectiveModule} from './../../directives/directive-module.module'

@NgModule({
  imports: [
    MedicalConcernRoutingModule,
    FormsModule,CommonModule,DirectiveModule
 
  ],
  declarations: [ MedicalConcernComponent ],
  providers:[AppService,ComponentsService]
})
export class MedicalConcernModule { }