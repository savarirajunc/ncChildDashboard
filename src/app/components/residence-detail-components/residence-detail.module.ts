import { NgModule } from '@angular/core';


import { ResidenceDetailComponent } from './residence-detail.component';
import { ResidenceDetailRoutingModule } from './residence-detail-routing.module';
import { FormsModule,CommonModule,AppService,ComponentsService } from './../components.index';
import { DirectiveModule} from './../../directives/directive-module.module'

@NgModule({
  imports: [
    ResidenceDetailRoutingModule,
    FormsModule,CommonModule,DirectiveModule
 
  ],
  declarations: [ ResidenceDetailComponent ],
  providers:[AppService]
})
export class ResidenceDetailModule { }