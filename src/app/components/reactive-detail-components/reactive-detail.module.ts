import { NgModule } from '@angular/core';


import { ReactiveDetailComponent } from './reactive-detail.component';
import { ReactiveDetailRoutingModule } from './reactive-detail-routing.module';
import { FormsModule,CommonModule,AppService,ComponentsService } from './../components.index';
import { DirectiveModule} from './../../directives/directive-module.module'

@NgModule({
  imports: [
    ReactiveDetailRoutingModule,
    FormsModule,CommonModule,DirectiveModule
  ],
  declarations: [ ReactiveDetailComponent ],
  providers:[AppService]
})
export class ReactiveDetailModule { }