import { NgModule } from '@angular/core';


import { SchoolInformationComponent } from './school-information.component';
import { SchoolInformationRoutingModule } from './school-information-routing.module';
import { FormsModule,CommonModule,AppService,ComponentsService } from './../components.index';
import { DirectiveModule} from './../../directives/directive-module.module'
@NgModule({
  imports: [
    SchoolInformationRoutingModule,
    FormsModule,CommonModule,DirectiveModule
 
  ],
  declarations: [ SchoolInformationComponent],
  providers:[AppService,ComponentsService]
})
export class SchoolInformationModule { }