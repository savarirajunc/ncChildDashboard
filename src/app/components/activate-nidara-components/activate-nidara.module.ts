import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivateNidaraComponent } from './activate-nidara.component';
import { ActivateNidaraRoutingModule } from './activate-nidara-routing.module';
import { DirectiveModule} from './../../directives/directive-module.module'
import { FormsModule,AppService,ComponentsService } from './../components.index';
@NgModule({
  imports: [
    ActivateNidaraRoutingModule,
    CommonModule,FormsModule,DirectiveModule
  ],
  declarations: [ActivateNidaraComponent],
  providers:[AppService,ComponentsService]
})
export class ActivateNidaraModule { }




