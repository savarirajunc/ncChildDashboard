import { NgModule } from '@angular/core';


import { CaregiverGuideComponent } from './caregiver-guide.component';
import { CaregiverGuideRoutingModule } from './caregiver-guide-routing.module';
import { FormsModule,CommonModule,AppService,ComponentsService } from './../components.index';
import { DirectiveModule} from './../../directives/directive-module.module'

@NgModule({
  imports: [
    CaregiverGuideRoutingModule,
    FormsModule,CommonModule,DirectiveModule
  ],
  declarations: [ CaregiverGuideComponent ],
  providers:[AppService,ComponentsService]
})
export class CaregiverGuideModule { }